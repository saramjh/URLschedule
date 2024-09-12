document.addEventListener("DOMContentLoaded", () => {
	const prevButton = document.getElementById("prev-mon")
	const nextButton = document.getElementById("next-mon")
	const currentMonthDisplay = document.getElementById("curent-mon")
	const calendarGrid = document.querySelector(".calendar-grid")
	const memoContainer = document.querySelector(".memo-container")
	const memoInput = document.getElementById("memo-input")
	const memoTime = document.getElementById("memo-time")
	const memoCompleted = document.getElementById("memo-completed")
	const saveButton = document.getElementById("save-memo")
	const deleteButton = document.getElementById("delete-memo")
	const shareButton = document.getElementById("share-button")
	const memoDate = document.getElementById("memo-date")
	const pastMemoCountElement = document.getElementById("past-memo-count")
	const futureMemoCountElement = document.getElementById("future-memo-count")

	let currentMonth = new Date()

	// Encryption and Decryption functions
	const encodeBase64 = (str) => {
		try {
			return btoa(unescape(encodeURIComponent(str)))
		} catch (e) {
			console.error("Encryption error: ", e)
			return ""
		}
	}

	const decodeBase64 = (str) => {
		try {
			return decodeURIComponent(escape(atob(str)))
		} catch (e) {
			console.error("Decryption error: ", e)
			return ""
		}
	}

	const setQueryParam = (param, value) => {
		const urlParams = new URLSearchParams(window.location.search)
		if (value) {
			urlParams.set(param, value)
		} else {
			urlParams.delete(param)
		}
		window.history.replaceState(null, "", "?" + urlParams.toString())
	}

	const getQueryParam = (param) => {
		const urlParams = new URLSearchParams(window.location.search)
		return urlParams.get(param)
	}

	// Render calendar
	const renderCalendar = () => {
		const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
		const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
		const startDay = firstDayOfMonth.getDay()

		calendarGrid.innerHTML = ""

		for (let i = 0; i < startDay; i++) {
			const emptyCell = document.createElement("div")
			emptyCell.classList.add("calendar-day", "empty")
			calendarGrid.appendChild(emptyCell)
		}

		for (let day = firstDayOfMonth; day <= lastDayOfMonth; day.setDate(day.getDate() + 1)) {
			const dayElement = document.createElement("div")
			dayElement.classList.add("calendar-day")
			dayElement.textContent = day.getDate()
			dayElement.dataset.date = day.toLocaleDateString("ko-KR").split("T")[0]

			if (localStorage.getItem(dayElement.dataset.date)) {
				dayElement.classList.add("has-memo")
			}

			dayElement.addEventListener("click", () => selectDate(dayElement.dataset.date))
			calendarGrid.appendChild(dayElement)
		}

		currentMonthDisplay.textContent = `${currentMonth.getFullYear()}년 ${currentMonth.getMonth() + 1}월`
		updateMemoCounts() // Ensure memo counts are updated after rendering the calendar
	}

	// Select date and show memo
	const selectDate = (dateString) => {
		memoContainer.style.display = "flex"
		memoDate.textContent = `${dateString}`
		const memo = localStorage.getItem(dateString)
		if (memo) {
			try {
				const [time, text, completed] = JSON.parse(decodeBase64(memo))
				memoInput.value = text || ""
				memoTime.value = time || ""
				memoCompleted.checked = completed || false
			} catch (e) {
				console.error("Failed to parse memo data: ", e)
				memoInput.value = ""
				memoTime.value = ""
				memoCompleted.checked = false
			}
		} else {
			memoInput.value = ""
			memoTime.value = ""
			memoCompleted.checked = false
		}
		memoInput.focus()
		saveButton.onclick = () => saveMemo(dateString)
		deleteButton.onclick = () => deleteMemo(dateString)
	}

	// Save memo
	const saveMemo = (dateString) => {
		const time = memoTime.value
		const text = memoInput.value
		const completed = memoCompleted.checked
		const encryptedMemo = encodeBase64(JSON.stringify([time, text, completed]))
		localStorage.setItem(dateString, encryptedMemo)
		setQueryParam(dateString, encryptedMemo)
		memoContainer.style.display = "none"
		renderCalendar()
	}

	// Delete memo
	const deleteMemo = (dateString) => {
		localStorage.removeItem(dateString)
		setQueryParam(dateString, null)
		memoContainer.style.display = "none"
		renderCalendar()
	}

	// Load calendar data from URL
	const loadFromURL = () => {
		localStorage.clear() // Clear local storage first
		const urlParams = new URLSearchParams(window.location.search)
		if (urlParams.toString() !== "") {
			urlParams.forEach((value, key) => {
				try {
					localStorage.setItem(key, decodeBase64(value))
				} catch (e) {
					console.error("Failed to load data from URL: ", e)
				}
			})
		}
		renderCalendar() // Render calendar after loading data
		updateMemoCounts() // Update memo counts after rendering calendar
	}

	// Share URL with memo data
	const shareURL = () => {
		const urlParams = new URLSearchParams()
		Object.keys(localStorage).forEach((key) => {
			const value = localStorage.getItem(key)
			if (value) {
				urlParams.set(key, encodeBase64(value))
			}
		})

		// Add past and future memo counts to URL parameters
		const pastMemos = pastMemoCountElement.textContent
		const futureMemos = futureMemoCountElement.textContent
		urlParams.set("pastMemos", pastMemos)
		urlParams.set("futureMemos", futureMemos)

		const shareableURL = window.location.origin + window.location.pathname + "?" + urlParams.toString()
		navigator.clipboard.writeText(shareableURL).then(() => {
			alert("URL이 클립보드에 복사되었습니다.")
		})
	}

	// Update memo counts for past and future months
	const updateMemoCounts = () => {
		const currentMonthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
		const currentMonthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0, 23, 59, 59)

		const countMemos = (startDate, endDate) => {
			let count = 0
			for (let date in localStorage) {
				const memoDate = new Date(date)
				if (memoDate >= startDate && memoDate <= endDate) {
					count++
				}
			}
			return count
		}

		const pastEndDate = new Date(currentMonthStart.getFullYear() - 100, 0, 1)
		const futureStartDate = new Date(currentMonthEnd.getFullYear() + 100, 11, 31)

		const pastMemos = countMemos(pastEndDate, currentMonthStart)
		const futureMemos = countMemos(currentMonthEnd, futureStartDate)

		pastMemoCountElement.textContent = pastMemos
		futureMemoCountElement.textContent = futureMemos

		setQueryParam("pastMemos", pastMemos)
		setQueryParam("futureMemos", futureMemos)
	}

	// Update counts based on URL parameters
	const updateCountsFromURL = () => {
		const pastMemos = getQueryParam("pastMemos")
		const futureMemos = getQueryParam("futureMemos")

		if (pastMemos !== null) {
			pastMemoCountElement.textContent = pastMemos
		}
		if (futureMemos !== null) {
			futureMemoCountElement.textContent = futureMemos
		}
	}

	prevButton.addEventListener("click", () => {
		currentMonth.setMonth(currentMonth.getMonth() - 1)
		renderCalendar()
	})

	nextButton.addEventListener("click", () => {
		currentMonth.setMonth(currentMonth.getMonth() + 1)
		renderCalendar()
	})

	shareButton.addEventListener("click", shareURL)

	loadFromURL() // Load calendar data from URL parameters
	updateCountsFromURL() // Update counts based on URL parameters
})

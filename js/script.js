document.addEventListener("DOMContentLoaded", () => {
	// 다국어 지원을 위한 번역 객체
	const localization = {
		en: {
			header: "URL Share Calendar",
			description: "Save schedules and memos and share them securely via URL!",
			prevMonth: "Previous Month",
			nextMonth: "Next Month",
			weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			shareButton: "Share Calendar",
			saveButton: "Save",
			deleteButton: "Delete",
			selectDate: "Please select a date",
			memoPlaceholder: "Enter your memo here",
			timeLabel: "Time",
			completedLabel: "Completed",
			memoSaved: "Memo saved.",
			memoDeleted: "Memo deleted.",
			urlCopied: "URL has been copied to clipboard.",
			pastMemos: "Past Memos",
			futureMemos: "Future Memos",
			dateFormat: { year: "numeric", month: "long", day: "numeric" },
			monthYearFormat: { year: "numeric", month: "long" },
		},
		ko: {
			header: "URL 공유 달력",
			description: "일정과 메모를 저장하고 안전하게 URL로 공유하세요!",
			prevMonth: "이전 달",
			nextMonth: "다음 달",
			weekdays: ["일", "월", "화", "수", "목", "금", "토"],
			shareButton: "달력 공유",
			saveButton: "저장",
			deleteButton: "삭제",
			selectDate: "날짜를 선택해주세요",
			memoPlaceholder: "메모를 입력하세요",
			timeLabel: "시간",
			completedLabel: "완료 여부",
			memoSaved: "메모가 저장되었습니다.",
			memoDeleted: "메모가 삭제되었습니다.",
			urlCopied: "URL이 클립보드에 복사되었습니다.",
			pastMemos: "지난 메모",
			futureMemos: "앞으로의 메모",
			dateFormat: { year: "numeric", month: "long", day: "numeric" },
			monthYearFormat: { year: "numeric", month: "long" },
		},
		zh: {
			header: "URL共享日历",
			description: "保存日程和备忘录，通过URL安全地分享！",
			prevMonth: "上个月",
			nextMonth: "下个月",
			weekdays: ["日", "一", "二", "三", "四", "五", "六"],
			shareButton: "分享日历",
			saveButton: "保存",
			deleteButton: "删除",
			selectDate: "请选择一个日期",
			memoPlaceholder: "在这里输入你的备忘录",
			timeLabel: "时间",
			completedLabel: "完成",
			memoSaved: "备忘录已保存。",
			memoDeleted: "备忘录已删除。",
			urlCopied: "URL已复制到剪贴板。",
			pastMemos: "过去的备忘录",
			futureMemos: "未来的备忘录",
			dateFormat: { year: "numeric", month: "long", day: "numeric" },
			monthYearFormat: { year: "numeric", month: "long" },
		},
		ja: {
			header: "URLシェアカレンダー",
			description: "スケジュールとメモを保存して、URLで安全にシェアしましょう！",
			prevMonth: "前の月",
			nextMonth: "次の月",
			weekdays: ["日", "月", "火", "水", "木", "金", "土"],
			shareButton: "カレンダーをシェア",
			saveButton: "保存",
			deleteButton: "削除",
			selectDate: "日付を選択してください",
			memoPlaceholder: "メモをここに入力",
			timeLabel: "時間",
			completedLabel: "完了",
			memoSaved: "メモが保存されました。",
			memoDeleted: "メモが削除されました。",
			urlCopied: "URLがクリップボードにコピーされました。",
			pastMemos: "過去のメモ",
			futureMemos: "将来のメモ",
			dateFormat: { year: "numeric", month: "long", day: "numeric" },
			monthYearFormat: { year: "numeric", month: "long" },
		},
		vi: {
			header: "Lịch chia sẻ URL",
			description: "Lưu lịch trình và ghi chú và chia sẻ chúng an toàn qua URL!",
			prevMonth: "Tháng trước",
			nextMonth: "Tháng sau",
			weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
			shareButton: "Chia sẻ lịch",
			saveButton: "Lưu",
			deleteButton: "Xóa",
			selectDate: "Vui lòng chọn một ngày",
			memoPlaceholder: "Nhập ghi chú của bạn ở đây",
			timeLabel: "Thời gian",
			completedLabel: "Hoàn thành",
			memoSaved: "Ghi chú đã được lưu.",
			memoDeleted: "Ghi chú đã bị xóa.",
			urlCopied: "URL đã được sao chép vào clipboard.",
			pastMemos: "Ghi chú đã qua",
			futureMemos: "Ghi chú tương lai",
			dateFormat: { year: "numeric", month: "long", day: "numeric" },
			monthYearFormat: { year: "numeric", month: "long" },
		},
		id: {
			header: "Kalender Berbagi URL",
			description: "Simpan jadwal dan catatan dan bagikan dengan aman melalui URL!",
			prevMonth: "Bulan Sebelumnya",
			nextMonth: "Bulan Berikutnya",
			weekdays: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
			shareButton: "Bagikan Kalender",
			saveButton: "Simpan",
			deleteButton: "Hapus",
			selectDate: "Silakan pilih tanggal",
			memoPlaceholder: "Masukkan catatan Anda di sini",
			timeLabel: "Waktu",
			completedLabel: "Selesai",
			memoSaved: "Catatan telah disimpan.",
			memoDeleted: "Catatan telah dihapus.",
			urlCopied: "URL telah disalin ke clipboard.",
			pastMemos: "Catatan Lampau",
			futureMemos: "Catatan Mendatang",
			dateFormat: { year: "numeric", month: "long", day: "numeric" },
			monthYearFormat: { year: "numeric", month: "long" },
		},
		fr: {
			header: "Calendrier de partage d'URL",
			description: "Enregistrez les horaires et les mémos et partagez-les en toute sécurité via une URL!",
			prevMonth: "Mois précédent",
			nextMonth: "Mois suivant",
			weekdays: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
			shareButton: "Partager le calendrier",
			saveButton: "Sauvegarder",
			deleteButton: "Supprimer",
			selectDate: "Veuillez sélectionner une date",
			memoPlaceholder: "Entrez votre mémo ici",
			timeLabel: "Heure",
			completedLabel: "Terminé",
			memoSaved: "Mémo enregistré.",
			memoDeleted: "Mémo supprimé.",
			urlCopied: "L'URL a été copiée dans le presse-papiers.",
			pastMemos: "Mémos passés",
			futureMemos: "Mémos futurs",
			dateFormat: { year: "numeric", month: "long", day: "numeric" },
			monthYearFormat: { year: "numeric", month: "long" },
		},
		de: {
			header: "URL-Teilen Kalender",
			description: "Speichern Sie Zeitpläne und Memos und teilen Sie sie sicher über eine URL!",
			prevMonth: "Vorheriger Monat",
			nextMonth: "Nächster Monat",
			weekdays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
			shareButton: "Kalender teilen",
			saveButton: "Speichern",
			deleteButton: "Löschen",
			selectDate: "Bitte wählen Sie ein Datum",
			memoPlaceholder: "Geben Sie hier Ihre Notiz ein",
			timeLabel: "Zeit",
			completedLabel: "Abgeschlossen",
			memoSaved: "Memo gespeichert.",
			memoDeleted: "Memo gelöscht.",
			urlCopied: "Die URL wurde in die Zwischenablage kopiert.",
			pastMemos: "Vergangene Memos",
			futureMemos: "Zukünftige Memos",
			dateFormat: { year: "numeric", month: "long", day: "numeric" },
			monthYearFormat: { year: "numeric", month: "long" },
		},
		it: {
			header: "Calendario di Condivisione URL",
			description: "Salva programmi e memo e condividili in modo sicuro tramite URL!",
			prevMonth: "Mese Precedente",
			nextMonth: "Mese Successivo",
			weekdays: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
			shareButton: "Condividi Calendario",
			saveButton: "Salva",
			deleteButton: "Elimina",
			selectDate: "Si prega di selezionare una data",
			memoPlaceholder: "Inserisci qui il tuo promemoria",
			timeLabel: "Ora",
			completedLabel: "Completato",
			memoSaved: "Promemoria salvato.",
			memoDeleted: "Promemoria eliminato.",
			urlCopied: "L'URL è stato copiato negli appunti.",
			pastMemos: "Promemoria Passati",
			futureMemos: "Promemoria Futuri",
			dateFormat: { year: "numeric", month: "long", day: "numeric" },
			monthYearFormat: { year: "numeric", month: "long" },
		},
		es: {
			header: "Calendario de Compartir URL",
			description: "¡Guarda horarios y notas y compártelos de forma segura mediante URL!",
			prevMonth: "Mes Anterior",
			nextMonth: "Mes Siguiente",
			weekdays: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
			shareButton: "Compartir Calendario",
			saveButton: "Guardar",
			deleteButton: "Eliminar",
			selectDate: "Por favor seleccione una fecha",
			memoPlaceholder: "Ingrese su nota aquí",
			timeLabel: "Hora",
			completedLabel: "Completado",
			memoSaved: "Nota guardada.",
			memoDeleted: "Nota eliminada.",
			urlCopied: "La URL ha sido copiada al portapapeles.",
			pastMemos: "Notas Pasadas",
			futureMemos: "Notas Futuras",
			dateFormat: { year: "numeric", month: "long", day: "numeric" },
			monthYearFormat: { year: "numeric", month: "long" },
		},
	}

	// DOM 요소들 선택
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
	const languageSelect = document.getElementById("language-select")

	let currentMonth = new Date()
	let currentLanguage = "en"

	const getQueryParam = (param) => {
		const urlParams = new URLSearchParams(window.location.search)
		return urlParams.get(param)
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

	const langParam = getQueryParam("lang")
	if (langParam && localization[langParam]) {
		currentLanguage = langParam
	}
	languageSelect.value = currentLanguage

	const updateUITexts = () => {
		const texts = localization[currentLanguage]
		document.getElementById("header").textContent = texts.header
		document.getElementById("description").textContent = texts.description
		shareButton.textContent = texts.shareButton
		saveButton.textContent = texts.saveButton
		deleteButton.textContent = texts.deleteButton
		memoDate.textContent = texts.selectDate
		memoInput.placeholder = texts.memoPlaceholder
		const weekdayRow = document.querySelector(".weekday-row")
		weekdayRow.innerHTML = ""
		texts.weekdays.forEach((day, index) => {
			const dayElement = document.createElement("div")
			dayElement.textContent = day
			if (index === 0 || index === 6) {
				dayElement.classList.add("weekend")
			} else {
				dayElement.classList.add("weekday")
			}
			weekdayRow.appendChild(dayElement)
		})
		const memoCompletedLabel = document.querySelector(".switch-label")
		memoCompletedLabel.childNodes[0].textContent = texts.completedLabel + " "
	}

	const renderCalendar = () => {
		console.log("Rendering calendar...")
		const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
		const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
		const startDay = firstDayOfMonth.getDay()
		calendarGrid.innerHTML = ""
		for (let i = 0; i < startDay; i++) {
			const emptyCell = document.createElement("div")
			emptyCell.classList.add("calendar-day", "empty")
			calendarGrid.appendChild(emptyCell)
		}
		const monthFormatter = new Intl.DateTimeFormat(currentLanguage, localization[currentLanguage].monthYearFormat)
		currentMonthDisplay.textContent = monthFormatter.format(currentMonth)
		for (let day = new Date(firstDayOfMonth); day <= lastDayOfMonth; day.setDate(day.getDate() + 1)) {
			const dayElement = document.createElement("div")
			dayElement.classList.add("calendar-day")
			dayElement.textContent = day.getDate()
			const dateString = new Date(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate())).toISOString().split("T")[0]
			dayElement.dataset.date = dateString

			if (localStorage.getItem(dayElement.dataset.date)) {
				dayElement.classList.add("has-memo")
			}
			console.log(`Date: ${dayElement.dataset.date}, Has Memo: ${localStorage.getItem(dayElement.dataset.date)}`)
			dayElement.addEventListener("click", () => selectDate(dayElement.dataset.date))
			calendarGrid.appendChild(dayElement)
		}
		updateMemoCounts()
	}

	const selectDate = (dateString) => {
		memoContainer.style.display = "flex"
		const date = new Date(dateString)
		const dateFormatter = new Intl.DateTimeFormat(currentLanguage, localization[currentLanguage].dateFormat)
		memoDate.textContent = dateFormatter.format(date)

		// Retrieve memo from localStorage directly
		const memo = localStorage.getItem(dateString)

		if (memo) {
			try {
				// Decode Base64
				const decodedMemo = atob(memo)
				// Decode URL-encoded characters
				const unescapedMemo = decodeURIComponent(decodedMemo)
				// Parse JSON
				const [time, text, completed] = JSON.parse(unescapedMemo)
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

	const saveMemo = (dateString) => {
		const time = memoTime.value
		const text = memoInput.value
		const completed = memoCompleted.checked
		const encryptedMemo = btoa(encodeURIComponent(unescape(JSON.stringify([time, text, completed]))))
		localStorage.setItem(dateString, encryptedMemo)
		setQueryParam(dateString, encryptedMemo)
		memoContainer.style.display = "none"
		renderCalendar()
		updateMemoCounts()
		alert(localization[currentLanguage].memoSaved)
	}

	const deleteMemo = (dateString) => {
		localStorage.removeItem(dateString)
		setQueryParam(dateString, null)
		memoContainer.style.display = "none"
		renderCalendar()
		updateMemoCounts()
		alert(localization[currentLanguage].memoDeleted)
	}

	const loadFromURL = () => {
		console.log("Loading from URL...")
		localStorage.clear()
		const urlParams = new URLSearchParams(window.location.search)
		urlParams.forEach((value, key) => {
			if (key !== "lang") {
				try {
					localStorage.setItem(key, value)
				} catch (e) {
					console.error("Failed to load data from URL: ", e)
				}
			}
		})
		renderCalendar()
		updateMemoCounts()
	}

	const shareURL = () => {
		const urlParams = new URLSearchParams()
		Object.keys(localStorage).forEach((key) => {
			const value = localStorage.getItem(key)
			if (value) {
				urlParams.set(key, value)
			}
		})
		urlParams.set("lang", currentLanguage)
		const shareableURL = window.location.origin + window.location.pathname + "?" + urlParams.toString()
		navigator.clipboard.writeText(shareableURL).then(() => {
			alert(localization[currentLanguage].urlCopied)
		})
	}

	const updateMemoCounts = () => {
		const firstDayOfCurrentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
		const lastDayOfCurrentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
		let pastCount = 0
		let futureCount = 0
		Object.keys(localStorage).forEach((dateString) => {
			const memoDate = new Date(dateString)
			if (memoDate < firstDayOfCurrentMonth) {
				pastCount++
			} else if (memoDate > lastDayOfCurrentMonth) {
				futureCount++
			}
		})
		pastMemoCountElement.textContent = pastCount
		futureMemoCountElement.textContent = futureCount
	}

	renderCalendar()
	languageSelect.addEventListener("change", (e) => {
		currentLanguage = e.target.value
		setQueryParam("lang", currentLanguage)
		updateUITexts()
		renderCalendar()
	})

	prevButton.addEventListener("click", () => {
		currentMonth.setMonth(currentMonth.getMonth() - 1)
		renderCalendar()
	})

	nextButton.addEventListener("click", () => {
		currentMonth.setMonth(currentMonth.getMonth() + 1)
		renderCalendar()
	})

	shareButton.addEventListener("click", shareURL)

	updateUITexts()
	loadFromURL()
})

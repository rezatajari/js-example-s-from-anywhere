// variable

// گرفتن باکس متن
const textArea = document.getElementById('textarea');
// گرفتن کلید ذخیره کردن یادداشت
const saveNote = document.getElementById('save_note');
// گرفتن بدنه داخل جدول
const tBody = document.querySelector('tbody');
// شمارنده ردیف
let counterRow = 0;



// listiners

// فراخوانی لوکال استوریج زمان بارگزاری صفحه
document.addEventListener('DOMContentLoaded', getDataFromLS);
// وقتی روی کلید ذخیره کردن یادداشت کلید می شود
saveNote.addEventListener('click', showListNote);




// function

// تابع فراخوانی اطلاعات از لوکال استوریج زمان بارگزاری یا بازخوانی سایت
function getDataFromLS() {
    const notes = getNoteFromLS();
    notes.forEach(function(note) {
        createTable(note);
    })
}

// تابع نشان دادن لیست ها به جدول و ایجاد لیست در جدول
function showListNote(e) {
    // قرار دادن حالت اولیه کلید
    e.preventDefault();
    const textValue = textArea.value;
    // ساخت جدول
    createTable(textValue);
    // اضافه کردن یادداشت به لوکال استوریج
    addNoteToLS(textValue);
    // نمایش متن تثبیت یادداشت
    showSuccess()
    setTimeout("hideSuccess()", 100);
    setTimeout("resetClass()", 1000);
    // پاک کردن باکس متن
    textArea.value = '';
}

// تابع نمایش پیام موفقیت
function showSuccess() {
    document.getElementById("sucess_message").classList.add('show');
}
// تابع نمایش پیام حذف
function showDanger() {
    document.getElementById("danger_message").classList.add('show');
}
// تابع حذف پیام موفقیت
function hideSuccess() {
    document.querySelector(".sucess").classList.add('hide');
}

function hideDanger() {
    document.querySelector(".danger").classList.add('hide');
}
// ریست شدن کل کلاس های اضافه شده
function resetClass() {
    document.querySelector(".alert").classList.remove('show');
    document.querySelector(".alert").classList.remove('hide');
}

// تابع ساخت جدول
function createTable(textValue) {
    // ایجاد سطر داخل بدنه جدول
    const tr = document.createElement('TR');
    tBody.appendChild(tr);
    // ایجاد ستون ردیف
    const tdRow = document.createElement('TD');
    // تولید شماره ردیف
    counterRow++;
    // قراردادن شماره ردیف در ستون مورد نظر آن ردیف
    tdRow.textContent = counterRow;
    tr.appendChild(tdRow);
    // ایجاد ستون یادداشت اضافه شده به جدول
    const tdNote = document.createElement('TD');
    // قرار دادن محتوای لیست داخل ستون یادداشت در جدول
    tdNote.textContent = textValue;
    tr.appendChild(tdNote);
    // درست کردن دکمه بسته شدن در لیست
    const closeBtn = document.createElement('a');
    closeBtn.textContent = 'X';
    // حذف شدن لیست یادداشت از جدول
    closeBtn.addEventListener('click', removeNoteFromTable);
    // اضافه کردن استایل مورد نظر به دکمه بسته شدن لیست
    closeBtn.classList = 'closebtn';
    tdNote.appendChild(closeBtn);
}

// تابع اضافه کردن لیست جدید به لوکال استوریج
function addNoteToLS(tdNote) {
    // گرفتن حالت اولیه لیست یادداشت و قرار دادن آن داخل یک متغییر
    const notes = getNoteFromLS();
    // اضافه کردن یادداشت جدید به لیست یادداشت های قبلی
    notes.push(tdNote);
    // اضافه کردن یادداشت جدید به لوکال استوریج
    localStorage.setItem('notes', JSON.stringify(notes))
}


// تابع برای گرفتن لیست یادداشت ها از لوکال استوریج
function getNoteFromLS() {
    let notes;
    let noteFromLS = localStorage.getItem('notes');
    if (noteFromLS === null) notes = [];
    else notes = JSON.parse(noteFromLS);
    return notes;
}



// حذف شدن لیست یادداشت مورد نظر با زدن دکمه ضربدر
function removeNoteFromTable(e) {
    // alert('یادداشت با موفقعیت حذف گردید')
    showDanger()
    setTimeout("hideDanger()", 100);
    setTimeout("resetClass()", 1000);
    // حذف کردن یادداشت مورد نظر
    e.target.parentElement.parentElement.remove();
    // گرفتن محتوای ستون یادداشت
    const tdContent = e.target.parentElement.textContent;
    // گرفتن محتوای ستون یادداشت بدون کلید ضربدر
    const noteContent = tdContent.substring(0, tdContent.length - 1);
    // گرفتن لیست یادداشت از لوکال استوریج
    const noteDeleteFromLS = getNoteFromLS();
    // حرف کردن یادداشت مورد نظر از داخل لوکال استوریج
    noteDeleteFromLS.forEach(function(note, index) {
        // اگر مقدار مجتوایی که میخوایم حذف کنیم با یکی داخل استوریج برابر بود آن را حذف کن
        if (noteContent === note) noteDeleteFromLS.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(noteDeleteFromLS))
    })

}
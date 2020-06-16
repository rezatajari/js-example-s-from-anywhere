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
    // پاک کردن باکس متن
    textArea.value = '';
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
    e.target.parentElement.parentElement.remove();

}
// variables

// گرفتن کلید ذخیره یادداشت
const saveNote = document.getElementById('btn_save');
// مقداری دهی متغییر برای گرفتن المنت لیست یادداشت ها
const noteList = document.getElementById('noteList');




// listiners

saveNote.addEventListener('click', createNewNote);
noteList.addEventListener('click', removeNote);
document.addEventListener('DOMContentLoaded', LSOnLoad)



// funtion

// تابع ایجاد لیست جدید یادداشت
function createNewNote(e) {
    // به حالت اولیه برگرداندن کلید ذخیره
    e.preventDefault(e);
    // مقدار تایپ شده داخل باکس متن را گرفته و در متغییر ریخته
    const newNote = document.getElementById('textarea');
    // فراخوانی تابع ساخت لیست و قرار دادن ان در لیست لیست ایتم مورد نظر در صفحه
    createListNote(newNote.value);
    addNotesToLS(newNote.value);

    // پیام با موفقیت ثبت کردن لیست
    alert('لیست مورد نظر با موفقعیت ثبت گردید !');
    // خالی کردن باکس متن
    newNote.value = '';

}

// درست کردن لیست جدید
function createListNote(value) {
    // درست کردن لیست
    const li = document.createElement('li');
    // مقدار داخل باکس متن را داخل لیست جایگذاری میکند
    li.textContent = value;
    // درست کردن المنت لینک برای ساختن کلید بستن یادداشت مورد نظر
    const closeBtn = document.createElement('a');
    // اضافه کردن لینک به لیست یادداشت
    const addCloseBtn = li.appendChild(closeBtn);
    // مقداردهی محتوای داخل لینک بسته شدن یادداشت
    addCloseBtn.textContent = 'X';
    // اضافه کردن استایل به لینک
    addCloseBtn.classList = 'close_note';
    // اضافه کردن لیست مورد نظر به جهت نمایش در صفحه
    const list = noteList.appendChild(li);
    // اضافه کردن لیست به لوکال استوریج
}

// تابع حذف کردن لیست آیتم
function removeNote(e) {
    // گرفتن لینک داخل لیست ایتم مورد نظر که کلیک شده
    if (e.target.classList.contains('close_note'))
    // حذف کردن لیست ایتم مورد نظر
        e.target.parentElement.remove();

    // تابع حذف از لوکال استوریج
    removeNoteFromLS(e.target.parentElement.textContent);
}

// تابع اضافه کردن یادداشت به لوکال استوریج
function addNotesToLS(note) {
    // مقدار قبلی لوکال استوریج را فراخوانی می کند
    const notes = getNotesToLS();
    // ریختن لیست جدید به متغییر آرایه ای
    notes.push(note);
    // ریختن آرایه به داخل لوکال استوریج به صورت رشته ای
    localStorage.setItem('notes', JSON.stringify(notes));
}

// تابع گرفتن کردن یادداشت به لوکال استوریج
function getNotesToLS() {
    let notes;
    // دریافت یادداشت قبلی از لوکال استوریج
    let getNoteItems = localStorage.getItem('notes');
    // بررسی اینکه ایا لوکال استوریج در حالت قبل محتوایی داشته است یا خیر
    if (getNoteItems === null) {
        notes = [];
    } else {
        notes = JSON.parse(getNoteItems);
    }
    // هر محتوایی داخل لوکال استوریج هست را برگردانده
    return notes
}


// تابع بازخوانی مطالب از لوکال استوریج در هنگام لود دوباره سایت
function LSOnLoad() {
    // فراخوانی محتوای از قبل بوده در لوکال استوریج 
    const notes = getNotesToLS();
    // نمایش آیتم هایی که از لوکال استوریج صفحه گرفته ایم
    notes.forEach(function(note) {
        createListNote(note);
    })
}


// تابع حذف لیست از لوکال استوریج زمانی که روی دکمه بستن کلید میشه
function removeNoteFromLS(noteContent) {
    //    حذف مقدار دکمه بسته شد از مجتوای اصلی لیست مورد انتخاب
    const noteDelet = noteContent.substring(0, noteContent.length - 1);
    // گرفتن مقدار اصلی محتوا از داخل لوکال استوریج
    const noteDeletFromLS = getNotesToLS();
    // پیمایش و پیدا کردن و مقایسه مقدار حذف شده با مقدار داخل لوکال استوریج
    noteDeletFromLS.forEach(function(noteItem, index) {
        if (noteItem === noteDelet)
            noteDeletFromLS.splice(index, 1);
    });
    // بروزرسانی حذفیات داخل لوکال استوریج
    localStorage.setItem('notes', JSON.stringify(noteDeletFromLS))
}
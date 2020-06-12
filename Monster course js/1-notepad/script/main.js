// variables
const saveNote = document.getElementById('btn_save');





// listiners
saveNote.addEventListener('click', createNewNote);



// funtion
function createNewNote(e) {
    // به حالت اولیه برگرداندن کلید ذخیره
    e.preventDefault(e);
    // مقدار تایپ شده داخل باکس متن را گرفته و در متغییر ریخته
    const newNote = document.getElementById('textarea').value;
    // درست کردن لیست
    const li = document.createElement('li')
        // مقدار داخل باکس متن را داخل لیست جایگذاری میکند
    li.textContent = newNote;
    // درست کردن المنت لینک برای ساختن کلید بستن یادداشت مورد نظر
    const closeBtn = document.createElement('a');
    // اضافه کردن لینک به لیست یادداشت
    const addCloseBtn = li.appendChild(closeBtn);
    // مقداردهی محتوای داخل لینک بسته شدن یادداشت
    addCloseBtn.textContent = 'X'
        // اضافه کردن استایل به لینک
    addCloseBtn.classList = 'close_note'

    // مقداری دهی متغییر برای گرفتن المنت لیست یادداشت ها
    const noteList = document.getElementById('noteList');
    // اضافه کردن لیست مورد نظر به جهت نمایش در صفحه
    const list = noteList.appendChild(li);






}
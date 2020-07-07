// =================== variables ===================
const getCar = document.querySelectorAll('.hilight_cover');
// a example from Carinfo classes
const carInfo = new Carinfo();
// get year input
const buildYear = document.getElementById('build_year');
// operation insurance button
const operationInsurance = document.getElementById('operation_insurance');
// close btn in modal box
const closeModal = document.getElementById('closeModal');
// close icon in modal box
const closeIcon = document.getElementById('closeIcon');



// =================== eventListeners ===================
for (let i = 0; i < getCar.length; i++) {
    getCar[i].addEventListener('click', function(e) {
        // get data id
        const dataId = e.target.getAttribute('data-id');
        const dataBefore = e.target.getAttribute('data-before');
        carInfo.dataId = dataId;
        carInfo.dataBefore = dataBefore;
        e.preventDefault();
        // convert persian year to english year
        carInfo.persianYearToEnglishYear();
        // convert englishDate to persianDate
        carInfo.englishToPersianDate();
    })
}

// call operation insurance method
operationInsurance.addEventListener('click', function(e) {
    e.preventDefault();
    // operation base year 3% off for each year
    carInfo.operationYearLevel();
    // choice type of insurance
    carInfo.operationTypeOfInsurance();
    // show result in next modal box
    const showResult = new ShowResult(carInfo);
    // set in formation in show modal
    showResult.setInfoInShowModal();
})

// call close modal method
closeModal.addEventListener('click', removeYearList);
// call close icon modal method
closeIcon.addEventListener('click', removeYearList);
// call remove function for remove all list year's
function removeYearList(e) {
    carInfo.removeYears(buildYear);
}
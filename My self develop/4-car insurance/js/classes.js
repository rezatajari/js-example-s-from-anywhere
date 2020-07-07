// information car class
class Carinfo {
    constructor(createYears, buildYear, getCar, dataId, dataBefore) {
        this.createYears = createYears;
        this.buildYear = buildYear;
        this.getCar = getCar;
        this.dataId = dataId;
        this.dataBefore = dataBefore;
    }

    // convert persian year to english year
    persianYearToEnglishYear() {
        // create range of years
        let createYears = new Date().getFullYear();
        createYears = new Date().toLocaleDateString('fa-IR');
        // seperate year from all of date string
        createYears = createYears.substring(0, 4);
        // convert persian number digit to english number digit
        let returnEnglishYearNumber = "",
            symbolMap = {
                '۱': '1',
                '۲': '2',
                '۳': '3',
                '۴': '4',
                '۵': '5',
                '۶': '6',
                '۷': '7',
                '۸': '8',
                '۹': '9',
                '۰': '0'
            };
        createYears = createYears.toString();
        for (var i = 0; i < createYears.length; i++)
            if (symbolMap[createYears[i]])
                returnEnglishYearNumber += symbolMap[createYears[i]];
            else
                returnEnglishYearNumber += createYears[i];
        return returnEnglishYearNumber;
    }

    // create 20 years ago and show in the box in digital number
    englishToPersianDate() {
        let year = this.persianYearToEnglishYear();
        // get buildYear input
        const buildYear = document.getElementById('build_year');
        // create 20 yearse ago since now year 
        let minYear = year - 20;
        for (year; year - minYear; year--) {
            // create each year in the build input
            const eachYear = document.createElement('option');
            eachYear.value = year;
            eachYear.textContent = year;
            buildYear.appendChild(eachYear);
        }

    }

    // operation base year off for each year
    operationYearLevel() {
        // now year
        let nowYear = this.persianYearToEnglishYear();
        // choice user year input
        const choiceYear = buildYear.value;
        // different now year with select year
        const differenceYear = nowYear - choiceYear;
        // base price insurance
        let baseInsurance = 200000;
        // operation 3%off per each year
        baseInsurance -= ((3 * differenceYear) / 100) * baseInsurance;
        return baseInsurance;
    };

    // choice type of insurance
    operationTypeOfInsurance() {
        const baseInsurance = this.operationYearLevel();
        // basic insurance type
        const basicInsurance = document.getElementById('basic');
        // complate insurance type
        const complateInsurance = document.getElementById('complate');
        // price insurance
        let price;
        let nameTypeInsurance;
        /* ==================== compare basic with complate type of insurance ====================
        ===== for basic type =====
        teana >>>> 1.20%
        optima >>>> 1.30%
        mitsubishi >>>> 1.40%
        ===== for complate type =====
           teana >>>> 1.40%
        optima >>>> 1.60%
        mitsubishi >>>> 1.80%
        */
        if (basicInsurance.checked) {
            nameTypeInsurance = 'ساده';
            switch (carInfo.dataId) {
                case '1':
                    price = baseInsurance * 1.20;
                    break;
                case '2':
                    price = baseInsurance * 1.30;
                    break;
                case '3':
                    price = baseInsurance * 1.40;
                    break;

            }
        } else {
            nameTypeInsurance = 'کامل';
            switch (carInfo.dataId) {
                case '1':
                    price = baseInsurance * 1.40;
                    break;
                case '2':
                    price = baseInsurance * 1.60;
                    break;
                case '3':
                    price = baseInsurance * 1.80;
                    break;
            }
        }
        return [nameTypeInsurance, price];
    }

    // remove years in build years inputs
    removeYears() {
        const tmp = buildYear.length;
        for (let i = 1; i <= tmp; i++)
            buildYear.children[0].remove()
    }
}

// show result class
class ShowResult {
    constructor(carInfo) {
        this.carInfo = carInfo;
    }

    setInfoInShowModal() {
        // get show box div in modal 
        const showBox = document.getElementById('show_Box');
        // set information in show box
        switch (carInfo.dataId) {
            case '1':
                showBox.innerHTML = `
                <p>نام خودرو: ${carInfo.dataBefore}</p>
               
                 `
                break;
            case '2':
                showBox.innerHTML = `
                <p>نام خودرو: ${carInfo.dataBefore}</p>
                `
                break;
            case '3':
                showBox.innerHTML = `
                <p>نام خودرو: ${carInfo.dataBefore}</p>
                `
                break;
        }
        // show type & price car
        showBox.innerHTML += `
        <p>سال ساخت خودرو: ${buildYear.value}</p>
        <p>نوع بیمه خودرو: ${carInfo.operationTypeOfInsurance()[0]}</p>
        <p>قیمت نهایی بیمه خودرو: ${carInfo.operationTypeOfInsurance()[1]}</p>
        `
    }

}
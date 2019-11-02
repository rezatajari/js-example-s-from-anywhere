var listdaneshju = {
    name: 'reza',
    family: 'tajari',
    age: 28,
    hieght: 186,
    width: 91,
};
console.log(listdaneshju);
delete listdaneshju.age;
console.log(listdaneshju);
listdaneshju.rangcheshm = 'black';
console.log(listdaneshju);
var listvanomre = {
    name: 'reza',
    family: 'tajari',
    age: 28,
    nomre: {
        dini: 17,
        arabi: 15,
        riazi: 19,
        farsi: 13,
        varzesh: 'mardud',
        flag: true,
    },
};
console.log(listvanomre);
console.log(listvanomre.nomre.riazi);
console.log(listvanomre.nomre.flag);
var tes = listvanomre;
console.log(tes);
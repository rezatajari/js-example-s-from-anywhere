var ali = { name: "Iman", family: "Madaeiny", age: 30 };

function Person(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.funllName = function() {
        return this.name + " " + this.family;
    }
}

var iman = new Person("iman", "madaeny", 20);
iman.carname = "Pride";
console.log(iman.funllName());

var mina = new Person("mina", "minaei", 18);

var people = [];
people.push(new Person("iman", "madaeny", 30));
people.push(new Person("parham", "madaeiny", 5));
people.push(new Person("sara", "ahmadi", 19));
people.push(new Person("ali", "rezaei", 41));

console.log(people);

var text = "";

for (x in people) {
    text += people[x].name + " " + people[x].family + " -> " + people[x].age + " <br/>";
}

document.getElementById("demo").innerHTML = text;
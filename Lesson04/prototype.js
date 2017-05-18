// Az egyik opjektum prototípusa a másiknak
// A létrehozott objektum hivatkozik a prototípus elemeire
/*
var proto = {a: 1, b:2}
var obj = Object.create(proto)
obj
{}
obj.a
1
obj.b
2
proto.a = 3
obj.a
3
*/
// A JavaScript Objektum orientált nyelv, de nincsenek benne osztályok!
// A függvények is objectumok!
function Animal(w) {
    this.weight = w;
}

var proto = {height: 1};

Animal.prototype = proto;

var dog = new Animal(40);

proto.height = 2;

console.log(dog.weight);
console.log(dog.height);



function Car(type, color, km) {
    this.type = type;
    this.color = color;
    this.km = km;
}

Car.prototype.ride = function ride(journeyLength) {
   this.km += journeyLength;
}

var skoda = new Car('Skoda', 'purple', 1000);
skoda.ride(230);
console.log(skoda.km);

var lada = new Car('Lada', 'oceanblue', 180000);
lada.ride(8880);
console.log(lada.km);
console.log(lada);
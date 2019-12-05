class Rider {
    constructor(name, bike) {
        this.name = name;
        this.bike = bike;

        this.display = function () {
            console.log('Rider Name:', name);
            console.log('Bike Name:', bike);

        }
    }
}

const ob1 = new Rider('Yogesh', 'z900');
const ob2 = new Rider('Saurav', 'cbr650');
ob1.display();
ob2.display();

// function Human(name) {
//     this.name = name;
// }

// Human.prototype.intro = function() {
//     console.log('This is ' + this.name);
// }


// function SH(name, shName) {
//     Human.call(this, name);
//     this.shName = shName;
// }

// SH.prototype.introSH = function() {
//     console.log('This is ' + this.shName); 
// }

// Object.setPrototypeOf(SH.prototype, Human.prototype);

// let IM = new Human('Tony');
// IM.intro();

// let IM = new SH('Tony', 'IronMan');
// IM.introSH();
// IM.intro();


//

class Human {
    constructor(name) {
        this.name = name;
    }

    intro() {
        console.log('This is ' + this.name);        
    }
}


class SHName extends Human {
    constructor(name, shname) {
        super(name);
        this.shname = shname;
    }

    introSH() {
            console.log('This is ' + this.shname); 
    }

}

let IMC = new SHName('Tony', 'Ironman');
IMC.introSH();
IMC.intro();


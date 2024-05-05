
function crearObjeto (referente) {
    let newReferente = {};

    const keys = Object.keys(referente);
    for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
        const key = keys[keyIndex];
        newReferente[key] = referente[key]
    }
    console.log(newReferente);
    return newReferente;
}

function testCrearObjeto() {
    const dog = {
        name: "Firulais",
        ladrar: function() { console.log("Guau! Soy ", this.name) }
    }

    const cat = {
        name: "Marie",
        maullar: function() { console.log("Miau! Soy ", this.name) }
    }

    const otroPerro = crearObjeto(dog);
    otroPerro.name = "Pepe";

    dog.ladrar();
    otroPerro.ladrar();
}

testCrearObjeto()
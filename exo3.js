function infosLiens() {
    // votre code ...
    let aTag = document.getElementsByTagName('a').length;
    let lastAElement = document.body.querySelector('ul').lastElementChild.lastElementChild;
    console.log(aTag);

    for (i = 0; i < aTag; i++ ) {

        if (i === 1) {
            console.log("Le premier liens : " + document.getElementsByTagName('a').valueOf('a')[0])
        } 
    
        if ( i === aTag-1) {
            console.log("Le dernier liens : " + lastAElement);
        }
    }
}

function possede(_id, _class) {  
    // votre code ...
    let iD = document.getElementById(_id).classList.value;
    let elementClass = _class;
    let reg = new RegExp(elementClass, "gi");
    let search = iD.match(reg);

    if (elementClass == search) {
        return true;
    } else {
        return false;
    }
   
}

infosLiens();

console.log(possede("saxophone", "bois")); // Doit afficher true
console.log(possede("saxophone", "cuivre")); // Doit afficher false
console.log(possede("trompette", "cuivre")); // Doit afficher true
console.log(possede("contrebasse", "cordes")); // Doit afficher une erreur
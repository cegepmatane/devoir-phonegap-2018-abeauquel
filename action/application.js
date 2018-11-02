(function(){
    let instance = this;

    var initialiser = function(){

        window.addEventListener("hashchange", naviguer);

        naviguer();
    }


    let naviguer = function(){

        let liste = new ListeCadeauVue();
        listeCadeauVue.afficher(listeCadeauDonnee);


    }

    let naviguerAccueil = function(){
        window.location.hash= "";
    }

    initialiser()
})();

(function(){
    let instance = this;

    var initialiser = function(){
        instance.provinceDAO = new ProvinceDAO();
        instance.listeProvince = this.provinceDAO.lister();
        window.addEventListener("hashchange", naviguer);

        naviguer();
    }


    var naviguer = function(){
        var hash = window.location.hash;
        if(!hash){
        let vueListeProvince = new VueListeProvince();
        vueListeProvince.afficher(listeProvince);
        }
        else if(hash.match(/^#province\/[0-9]+/)){
            var idProvince = hash.match(/^#province\/([0-9]+)/)[1];
            var vueProvince = new VueProvince();
            vueProvince.afficher(listeProvince.chercherAvecId(idProvince));
        }
        else if(/^#ajouter-province/){
            var vueAjouterProfince = new VueAjouterProvince(actionEnregisterProvince);
            vueAjouterProfince.afficher();
        }

    }

    var actionEnregisterProvince = function (province) {
        console.log("J'ajoute une province");
        this.provinceDAO.ajouter(province);
        naviguerAccueil();
    }

    let naviguerAccueil = function(){
        window.location.hash= "";
    }

    initialiser()
})();

(function(){
    let instance = this;

    var initialiser = function(){
        instance.provinceDAO = new ProvinceDAO();
        instance.listeProvince = this.provinceDAO.lister();
        window.addEventListener("hashchange", naviguer);

        naviguer();
    };


    var naviguer = function(){
        var hash = window.location.hash;
        if(!hash){
        var vueListeProvince = new VueListeProvince();
        vueListeProvince.afficher(listeProvince);

            $( document ).ready(function() {
                $('.modal').modal();
            });
        } else if(hash.match(/^#province\/[0-9]+/)){
            var idProvince = hash.match(/^#province\/([0-9]+)/)[1];
            var vueProvince = new VueProvince();
            vueProvince.afficher(listeProvince.chercherAvecId(idProvince));

        }else if(hash.match(/^#modifier-province\/[0-9]+/)){
            var idProvince = hash.match(/^#modifier-province\/([0-9]+)/)[1];
            var vueAjouterProfince = new VueModifierProvince(actionModifierProvince);
            var province = listeProvince.chercherAvecId(idProvince);
            vueAjouterProfince.afficher(province);

        }
        else if(hash.match(/^#ajouter-province/)){
            var vueAjouterProfince = new VueAjouterProvince(actionEnregisterProvince);
            vueAjouterProfince.afficher();

        }else if(hash.match(/^#supprimer-province\/[0-9]+/)){
            var idProvince = hash.match(/^#supprimer-province\/([0-9]+)/)[1];
            this.provinceDAO.supprimer(idProvince);
            naviguerAccueil();
        }

        else {
            naviguerAccueil()
        }

    };

    var actionEnregisterProvince = function (province) {

        this.provinceDAO.ajouter(province);
        naviguerAccueil();
    };

    var actionModifierProvince = function (province) {
        this.provinceDAO.modifier(province);
        naviguerAccueil();
    };

    let naviguerAccueil = function(){
        window.location.hash= "";
    };

    initialiser()


})();

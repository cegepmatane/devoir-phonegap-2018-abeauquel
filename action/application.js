(function(){
    let instance = this;

    var initialiser = function(){
        instance.provinceDAO = new ProvinceDAO();
        instance.listeProvince = this.provinceDAO.lister();
        window.addEventListener("hashchange", naviguer);

        naviguer();
    }


    let naviguer = function(){

        let vueListeProvince = new VueListeProvince();
        vueListeProvince.afficher(listeProvince);


    }

    let naviguerAccueil = function(){
        window.location.hash= "";
    }

    initialiser()
})();

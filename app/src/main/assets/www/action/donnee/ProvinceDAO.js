var ProvinceDAO = function () {
    /** @var Provinces listeProvince*/
    var listeProvince = null;

    var initialiser = function () {
        if(!listeProvince){
            listeProvince = new Provinces([]);

        }
    }

    this.chercherProvinceAvecId = function (id) {

    }

    this.ajouter = function (province) {
       /* if(listeProvince.getListeProvince().length >0){
            province.id = listeProvince.getListeProvince()[listeProvince.length-1].id+1;
        }
        else{
            province.id=0;
        }*/
       province.id = listeProvince.chercherUnNouvelleId();
        listeProvince.ajouter(province);
        localStorage['province'] = JSON.stringify(listeProvince.getListeProvince());
    }

    this.lister = function () {
      if(localStorage['province'])
            listeProvince.setListeProvince(JSON.parse(localStorage['province']));

        for (position in listeProvince.getListeProvince()){
            var province = new Province(
                listeProvince.getListeProvince()[position].id,
                listeProvince.getListeProvince()[position].nom,
                listeProvince.getListeProvince()[position].population,
                listeProvince.getListeProvince()[position].superficie,
                listeProvince.getListeProvince()[position].capital);
            listeProvince.getListeProvince()[position] = province;
        }
       /* var listeProvince = new Provinces([
            new Province(1, "Québec", 8164361, 1542056, "Québec"),
            new Province(2, "Ontario", 13448494, 1076395, "Toronto"),
            new Province(3, "Alberta", 4067175, 661848, "Edmonton"),
            new Province(4, "Colombie-Britannique", 4648055, 944735, "Victoria"),

        ]);*/

        return listeProvince;
    }

    initialiser();
}
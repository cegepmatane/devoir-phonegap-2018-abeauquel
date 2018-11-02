var ProvinceDAO = function () {

    var listeProvince = null;

    var initialiser = function () {
        if(!listeProvince){
            listeProvince = [];

        }
    }

    this.chercherProvinceAvecId = function (id) {

    }

    this.ajouter = function (province) {
   /*     if(listeProvince.length >0){
            province.id = listeProvince[listeProvince.length-1].id+1;
        }
        else{
            province.id=0;
        }
        listeProvince[province.id]= province;
        localStorage['province'] = JSON.stringify(listeProvince);*/
    }

    this.lister = function () {
      /*  if(localStorage['province'])
            listeProvince = JSON.parse(localStorage['province']);

        for (position in listeProvince){
            var province = new Province(listeProvince[position].id,
                listeProvince[position].nom,
                listeProvince[position].population,
                listeProvince[position].superficie,
                listeProvince[position].capital);
            listeProvince[position] = province;
        }*/
        var listeProvince = [
            new Province(1, "Québec", 8164361, 1542056, "Québec"),
            new Province(2, "Ontario", 13448494, 1076395, "Toronto"),
            new Province(3, "Alberta", 4067175, 661848, "Edmonton"),
            new Province(4, "Colombie-Britannique", 4648055, 944735, "Victoria"),

        ];
        return listeProvince;
    }

    initialiser();
}
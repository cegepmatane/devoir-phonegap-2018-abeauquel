var Provinces = function (plisteProvince) {

    var listeProvince=plisteProvince;

    this.chercherAvecId= function (id) {
        for (position in listeProvince){
            if(listeProvince[position].id == id){
                return listeProvince[position]
            }
        }
        return null;
    };

    this.chercherUnNouvelleId = function(){
        var id=-1;
        var trouver= false;
        while (!trouver) {
            trouver = true;
            id+=1;
            for (position in listeProvince){
                if(listeProvince[position].id == id){
                    trouver=false;
                    break;
                }
            }

        }
        return id;
    }

    this.ajouter = function (province) {
        listeProvince.push(province);
    }

    this.getListeProvince = function() {
        return listeProvince;
    }

    this.setListeProvince = function (plisteProvince) {
        listeProvince = plisteProvince;
    }
};

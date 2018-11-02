var Provinces = function (plisteProvince) {

    var listeProvince=plisteProvince;

    var chercherAvecId= function (id) {
        for (position in listeProvince){
            if(listeProvince[position].id === id){
                return listeProvince[position]
            }
        }
        return null;
    }

    this.getListeProvince = function() {
        return listeProvince;
    }
};

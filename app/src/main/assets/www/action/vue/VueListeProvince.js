var VueListeProvince = (function(){
    let pageListeProvince = document.getElementById("page-liste-province").innerHTML;//recuperation du javascript

    return function () {

        this.afficher = function (listeProvince) {

            document.getElementsByTagName("body")[0].innerHTML = pageListeProvince;

            let baliseListeProvince = document.getElementById('liste-province');

            let li = "";

            for (var position in listeProvince.getListeProvince()) {
                li += '<a class="collection-item"  href="#province/' + listeProvince.getListeProvince()[position].id + '">';
                li += listeProvince.getListeProvince()[position].nom + '</a>'
            }

            baliseListeProvince.innerHTML = li;

        }
    }

})();
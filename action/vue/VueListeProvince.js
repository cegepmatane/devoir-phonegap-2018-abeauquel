var VueListeProvince = (function(){
    let pageListeProvince = document.getElementById("page-liste-province").innerHTML;//recuperation du javascript

    return function () {

        this.afficher = function (listeProvince) {

            document.getElementsByTagName("body")[0].innerHTML = pageListeProvince;

            let baliseListeProvince = document.getElementById('liste-province');

            let li = "";

            for (var uneProvince in listeProvince) {
                li += '<li><a href="#province/' + listeProvince[uneProvince].id + '">';
                li += listeProvince[uneProvince].nom + '</a></li>'
            }

            baliseListeProvince.innerHTML = li;

        }
    }

})();
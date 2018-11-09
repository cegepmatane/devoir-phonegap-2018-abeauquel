var VueListeProvince = (function(){
    let pageListeProvince = document.getElementById("page-liste-province").innerHTML;//recuperation du javascript

    return function () {

        this.afficher = function (listeProvince) {

            document.getElementsByTagName("body")[0].innerHTML = pageListeProvince;

            var baliseListeProvince = document.getElementById('liste-province');

            var li = "";
            var popupsSuppression="";

            for (var position in listeProvince.getListeProvince()) {
                maProvince=listeProvince.getListeProvince()[position];

                li+="<div class='row'  style='all:unset; clear: none; '>";

                li += '<a class="collection-item col s9" style="padding-top: 17px;padding-bottom: 17px;" href="#province/' + maProvince.id + '">';

                li += maProvince.nom ;
                li+='</a> ';
                li+="<div class='align-center' >";
                li+='<a class="waves-effect waves-light btn-large blue col s2" style=" text-align: center"' +
                    '  href="#modifier-province\/'+maProvince.id+'" ><i class="material-icons">edit</i></a>';

                li+='<a class="waves-effect waves-light btn-large red col s1 modal-trigger" style="margin: auto; text-align: center" ' +
                    //' href="#supprimer-province\/'+listeProvince.getListeProvince()[position].id+'" ><i class="small material-icons">delete_forever</i></a>';
                    ' href="#verification-suppression-province\/'+maProvince.id+'" ><i class="small material-icons">delete_forever</i></a>';

                li+="</div>";
                li+="</div>";

                popupsSuppression+='<div id="verification-suppression-province\/'+maProvince.id+'" class="modal">';
                popupsSuppression+="<div class=\"modal-content\">";
                popupsSuppression+="<h4>Suppression de la province : "+maProvince.nom+" </h4>";
                popupsSuppression+="<p>Etes vous sur de vouloir supprimer cette province  ?</p>";
                popupsSuppression+="</div>";
                popupsSuppression+="<div class=\"modal-footer\">";
                popupsSuppression+="<a href=\"#!\" style='margin-right:2% ' class=\"modal-close waves-effect waves-light btn green\">Annuler</a>";

                popupsSuppression+="<a href=\"#supprimer-province/"+ maProvince.id +"\" class=\"modal-close waves-effect waves-light btn red\">valider</a>";
                popupsSuppression+="</div>";
                popupsSuppression+="</div>";

            }
            document.getElementById("modals").innerHTML+=popupsSuppression;

            baliseListeProvince.innerHTML = li;

        }
    }

})();
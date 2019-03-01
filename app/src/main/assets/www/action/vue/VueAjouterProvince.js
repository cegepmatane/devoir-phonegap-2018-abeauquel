let VueAjouterProvince = (function() {
    let pageAjouterProvince = document.getElementById("page-ajouter-province").innerHTML;

    return(
        function(actionEnregisterProvince){

            this.afficher = function(){
                document.getElementsByTagName("body")[0].innerHTML = pageAjouterProvince;
                let formulaireAjouter = document.getElementById("formulaire-ajouter");
                formulaireAjouter.addEventListener("submit", enregistrerProvince)
            }

            var enregistrerProvince = function (evenement) {
                evenement.preventDefault();
                var nom = document.getElementById("nom").value;
                var image = document.getElementById("lien-image").value;
                var capital = document.getElementById("capital").value;
                var population = document.getElementById("population").value;
                var superficie = document.getElementById("superficie").value;
                var province= new Province(null, nom, image, population, superficie, capital);
                actionEnregisterProvince(province);
            }
        })
})();

let VueModifierProvince = (function() {
    let pageModifierProvince = document.getElementById("page-modifier-province").innerHTML;

    return(
        function(actionEnregisterProvince){
            var idProvince;
            var provinceNom;
            var provincePopulation;
            var provinceSuperficie;
            var provinceCapital;

            this.afficher = function(province){
                document.getElementsByTagName("body")[0].innerHTML = pageModifierProvince;
                let formulaireAjouter = document.getElementById("formulaire-modifier");
                formulaireAjouter.addEventListener("submit", enregistrerProvince);

                idProvince = province.id;

                provinceNom = document.getElementById("nom");
                provinceNom.value = province.nom;

                provincePopulation = document.getElementById("population");
                provincePopulation.value = province.population ;

                provinceSuperficie = document.getElementById("superficie");
                provinceSuperficie.value = province.superficie

                provinceCapital = document.getElementById("capital");
                provinceCapital.value = province.capital ;

            }

            var enregistrerProvince = function (evenement) {
                evenement.preventDefault();
                var nom = document.getElementById("nom").value;
                var capital = document.getElementById("capital").value;
                var population = document.getElementById("population").value;
                var superficie = document.getElementById("superficie").value;

                actionEnregisterProvince(new Province(idProvince, nom, population, superficie, capital));
            }
        })
})();

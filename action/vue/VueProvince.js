let VueProvince = (function() {
    let pageProvince = document.getElementById("page-province").innerHTML;

    return(
        function(){
            var provinceNom;
            var provincePopulation;
            var provinceSuperficie;
            var provinceCapital;

            this.afficher = function(province){
                document.getElementsByTagName("body")[0].innerHTML = pageProvince;

                provinceNom = document.getElementById("province-nom");
                provinceNom.innerHTML = province.nom;

                provincePopulation = document.getElementById("province-population");
                provincePopulation.innerHTML = province.population;

                provinceSuperficie = document.getElementById("province-superficie");
                provinceSuperficie.innerHTML = province.superficie;

                provinceCapital = document.getElementById("province-capital");
                provinceCapital.innerHTML = province.capital;
            }
        })
})();

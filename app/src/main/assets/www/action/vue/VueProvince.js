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
                provincePopulation.innerHTML = "Population : "+ province.population + " habitants";

                provinceSuperficie = document.getElementById("province-superficie");
                provinceSuperficie.innerHTML = "Superficie : "+province.superficie + " habitants";

                provinceCapital = document.getElementById("province-capital");
                provinceCapital.innerHTML = "Capital : "+ province.capital ;
            }
        })
})();

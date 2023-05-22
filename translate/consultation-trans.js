var arrLang = {
    "fr": {

    // head
    "TITLE": "Consultation jurdiques en ligne",
    "KEYWORDS": "Consultation jurdique en ligne, Services jurdiques en ligne,  Service jurdique en ligne de LégalQc, LégalQC, droit de la famille, petites créance, droit des affaires, droit corporatif, droit civil, droit d'immigration",

    "DESCRIPTION": "Consultation juridiques en ligne à un tarif abordable en droit de la famille, préparation pour la cour petites créances, droit corporatif, droit des affaires, droit civil, et en droit d'immigration. parler facilement et rapidement à un avocat pour Obtenir le bon conseil juridique au bon moment.",
    

    // body
        // Navigation bar
    "HOME": "Accueil",
    "CABINET": "Notre cabinet",
    "CONTACT": "Contact",
    "CONSULTATION": "Consultation en ligne",
        // Footer
    "RIGHTS": "Services conçus et mis en oeuvre par ASC Avocat - Tous droits réservés",
      


    },
    //**********************************************************************

    "en": {

    // head
    "TITLE": "Online legal consultation",
    "KEYWORDS": "Online legal consultation, Online legal services, LegalQC online legal service, LegalQC, family law, small claims, business law, corporate law, civil law, immigration law",

    "DESCRIPTION": "Affordable online legal consultation in family law, small claims court preparation, corporate law, business law, civil law, immigration law. Easily and quickly talk to a lawyer to get the right legal advice at the right time",
    

    // body
        // Navigation bar
    "HOME": "Home",
    "CABINET": "Our law firm",
    "CONTACT": "Contact",
    "CONSULTATION": "Online Consultation",
        // Footer
    "RIGHTS": "Services designed and implemented by ASC Lawyer - All rights reserved.",

 
    }
  };

// Function to choose iframe based on language

function go(url){
  document.getElementById('JotFormIFrame-223136961601249').src= url;
}
 
// The default language is English
var lang = "fr";
// Check for localStorage support
if('localStorage' in window){

var usrLang = localStorage.getItem('uiLang');
if(usrLang) {
 lang = usrLang
}

}

// handling request for appropriate form based on user language
if (lang=== "fr"){
  go('https://form.jotform.com/MeSidiki/legal-consultation-online?language=fr-CA&dropdown=hidden') ;

} else if (lang=== "en"){
  go('https://form.jotform.com/MeSidiki/legal-consultation-online?language=en-CA&dropdown=hidden') ;
}  

// end of handling above request

console.log(lang);

  $(document).ready(function() {

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });

  // get/set the selected language

   $(".translate").click(function() {
     var lang = $(this).attr("id");

    //  // handling request for proposal form based on selected language
    if (lang=== "fr"){
      go('https://form.jotform.com/MeSidiki/legal-consultation-online?language=fr-CA&dropdown=hidden') ;
    
    } else if (lang=== "en"){
      go('https://form.jotform.com/MeSidiki/legal-consultation-online?language=en-CA&dropdown=hidden') ;
    }  
      // end here - handling selected language
     


    
    // update localStorage key
    if('localStorage' in window){
         localStorage.setItem('uiLang', lang);
         console.log( localStorage.getItem('uiLang') );
    }

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });


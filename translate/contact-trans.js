var arrLang = {
    "fr": {

    // head
    "TITLE": "Contact LégalQC, services jurdiques en ligne",
    "KEYWORDS": "Contact LégalQC, Services jurdiques en ligne, Service jurdique en ligne, LégalQC, droit de la famille, petites créance, droit des affaires, droit corporatif, droit civil, droit d'immigration",

    "DESCRIPTION": "Vous pouvez joindre LégalQC pour des services juridiques en ligne avec des tarifs avantageux en droit de la famille, préparation pour la cour petites créances, droit corporatif, droit des affaires, droit civil, et en droit d'immigration. Vous pouvez contacter LégalQC par téléphone, WhatsApp, SMS... LégalQC offre des services juridiques en ligne avec des tarifs abordables et à la portée de tous. N'hésitez surtout pas à communiquer avec LégalQC.",
    

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
    "TITLE": "Contact LegalQC, online legal services",
    "KEYWORDS": "Contact LegalQC, Online legal services, Online legal service, LegalQC, family law, small claims, business law, corporate law, civil law, immigration law",

    "DESCRIPTION": "You can reach LegalQC for online legal services with low rates in family law, small claims court preparation, corporate law, business law, civil law, and immigration law. You can contact LegalQC by phone, WhatsApp, SMS... LegalQC offers online legal services at affordable rates. Do not hesitate to contact LegalQC.",
    

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
  document.getElementById('JotFormIFrame-223407096447257').src= url;
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
  go('https://form.jotform.com/MeSidiki/legalqc-contact-form?language=fr-CA&dropdown=hidden') ;

} else if (lang=== "en"){
  go('https://form.jotform.com/MeSidiki/legalqc-contact-form?language=en-CA&dropdown=hidden') ;
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

      // handling request for appropriate form based on user language
      if (lang=== "fr"){
        go('https://form.jotform.com/MeSidiki/legalqc-contact-form?language=fr-CA&dropdown=hidden') ;

      } else if (lang=== "en"){
        go('https://form.jotform.com/MeSidiki/legalqc-contact-form?language=en-CA&dropdown=hidden') ;
      }  

      // end of handling above reques
     


    
    // update localStorage key
    if('localStorage' in window){
         localStorage.setItem('uiLang', lang);
         console.log( localStorage.getItem('uiLang') );
    }

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });


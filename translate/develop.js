var arrLang = {
    "fr": {

    // head
    "TITLE": "ASC AVocat, services en développement",
    "KEYWORDS": "Services juridiques en ligne en développement, ASC Avocat",

    "DESCRIPTION" : "ASC Avocat offre exclusivement des services juridiques en ligne avec des tarifs abordables. Nous nous consacrons au développement des services juridiques en ligne.",

    // body
        // Navigation bar
    "HOME": "Accueil",
    "CABINET": "Notre cabinet",
    "CONTACT": "Contact",
    "CONSULTATION": "Consultation en ligne",
        // Footer
    "RIGHTS": "Services conçus et mis en oeuvre par ASC Avocat - Tous droits réservés",

    "T1":"Services disponibles très bientôt...",
    "T2":"Désolé, ce service est en developpement informatique.",
    "T3":"Retourner à la page d'accueil",
  



    },
    //**********************************************************************

    "en": {

    // head
    "TITLE": "ASC Lawyer, services in development",
    "KEYWORDS": "Online legal services in developement, ASC Lawyer",

    "DESCRIPTION": "ASC Lawyer offers exclusively online legal services with affordable rates. We are dedicated to develop online legal services.",
    

    // body
        // Navigation bar
    "HOME": "Home",
    "CABINET": "Our law firm",
    "CONTACT": "Contact",
    "CONSULTATION": "Online Consultation",
        // Footer
    "RIGHTS": "Services designed and implemented by ASC Lawyer - All rights reserved.",

    "T1":"Services available very soon...",
    "T2":"Sorry, services are in development stage.",
    "T3":"Go back to home page",
   
    }
  };


 
// The default language is English
var lang = "fr";
// Check for localStorage support
if('localStorage' in window){

var usrLang = localStorage.getItem('uiLang');
if(usrLang) {
 lang = usrLang
}

}

// handling request for  appropriate form based on user language


        // *******code here*********

    // end here - request handling 


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

        // *******code here*********

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
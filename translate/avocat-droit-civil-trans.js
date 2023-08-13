var arrLang = {
    "fr": {

    // head
    "TITLE": "Cabinet d'avocat en droit civil",
    "KEYWORDS": "avocat en droit civil, avocat spécialisé en droit civil, cabinet d'avocat droit civil, avocat droit civil Montréal, avocat droit civil Laval, avocat droit civil Longueuil, avocat en litige, avocat litige civil",

    "DESCRIPTION": "Si vous recherchez un avocat en droit civil, nous mettons à votre disposition notre expertise. Nous sommes spécialisés dans les litiges liés aux contrats, aux fautes et aux préjudices dans le domaine civil. Faites appel à nous pour défendre vos droits et obtenir une résolution équitable à votre problème.",
    

    // body
        // Navigation bar
    "HOME": "Accueil",
    "CABINET": "Notre cabinet",
    "SERVICES": "Services",
    "CONTACT": "Contact",
    "CONSULTATION": "Consultation en ligne",
        // Footer
    "RIGHTS": "Services conçus et mis en oeuvre par ASC Avocat - Tous droits réservés",

    "T1":"AVOCAT DROIT CIVIL",
    "T2":"Des solutions juridiques adaptées selon vos besoins",
    "T3":"Une représentation vigoureuse pour protéger vos droits",
    "T4":"Des conseils stratégiques dans le but d'obtenir le meilleur resultat",
    "T5":"Des services juridiques à des tarifs compétitifs",
    "T6":"Prendre un rendez-vous",
    "CITY":"Montréal, Laval, Longueuil",
    "PHONE":"(514) 600-5554",



   

    "T26":"DROIT CIVIL",
    "T27":"Chez ASC Avocat, nous nous efforçons de conseiller judicieusement nos clients et de les représenter avec zèle dans le but d'obtenir des résultats satisfaisants. Dotés d'une expertise solide dans les problématiques en droit civil, nous possédons la compétence requise pour gérer vos dossiers avec efficacité. Nous comprenons les enjeux pour nos clients et nous nous engageons à œuvrer en leur faveur dans diverses situations:",
    "T27-1":"Responsabilité civile en demande ou en défense",
    "T27-2":"Saisie avant jugement",
    "T27-3":"Opposition à la saisie",
    "T27-4":"Protection du consommateur",
    "T27-5":"Diffamation",
    "T27-6":"Litige en matière de succession",
    "T27-7":"Recouvrement de créances",
    "T27-8":"litige contractuel",
    
    "T28":"Les litiges civils peuvent s'avérer longs et coûteux pour toutes les parties engagées. C'est pourquoi il est essentiel d'avoir à vos côtés un avocat en droit civil pour défendre efficacement vos droits au tribunal.",
    "T29":"Si vous êtes à la recherche d'un avocat spécialisé en droit civil, n'hésitez pas à nous contacter dès aujourd'hui par téléphone ou à planifier une consultation. Nous sommes prêts à vous aider avec votre situation juridique.",


    "T46":"Demander un rappel téléphonique",
    "T47":"Laissez-nous vos informations, nous vous rappelerons aussitôt que possible pour cerner vos besoins juridiques.",
    "T48":"Demander un rappel téléphonique",

   

    },
    //**********************************************************************

    "en": {

    // head
    "TITLE": "Civil law firm",
    "KEYWORDS": "civil lawyer, civil law specialist, civil  law firm, civil lawyer Montreal, civil lawyer Laval, civil lawyer Longueuil, litigation lawyer, civil litigation lawyer",

    "DESCRIPTION": "If you're looking for a civil lawyer, we can help you with our expertise. We specialize in contractual, tort and civil litigation. Call on us to defend your rights and obtain a fair resolution to your problem.",
    

    // body
        // Navigation bar
    "HOME": "Home",
    "CABINET": "Our law firm",
    "SERVICES": "Services",
    "CONTACT": "Contact",
    "CONSULTATION": "Online consultation",
        // Footer
    "RIGHTS": "Services designed and implemented by ASC Avocat - All rights reserved",

    "T1": "CIVIL LAWYER",
    "T2": "Legal solutions tailored to your needs",
    "T3": "Vigorous representation to protect your rights",
    "T4": "Strategic advice in order to obtain the best result",
    "T5": "Legal services at competitive rates",
    "T6": " Book an appointment",
    "CITY": "Montreal, Laval, Longueuil",
    "PHONE":"(514) 600-5554",

    
   
    "T26": "CIVIL LAW",
    "T27": "At ASC Avocat, we strive to provide our clients with sound advice and diligent representation in order to achieve successful results. With our solid expertise in civil law issues, we have the skills to manage your cases effectively. We understand what is at stake for our clients and we are committed to working on their behalf in a variety of situations:",
    "T27-1": "Civil liability as plaintiff or defendant",
    "T27-2": "Seizure before judgment",
    "T27-3": "Opposition to seizure",
    "T27-4": "Consumer protection",
    "T27-5":"Diffamation",
    "T27-6": "Estate Litigation",
    "T27-7": "Debt collection",
    "T27-8": "Contractual dispute",
    
    "T28": "Civil litigation can be lengthy and costly for all parties involved. This is why it is essential to have a civil lawyer by your side to effectively defend your rights in court",
    "T29": "If you are looking for a civil law attorney, please feel free to contact us today by phone or schedule a consultation. We are ready to help you with your legal situation.",


    "T46": "Request a call back",
    "T47": "Leave us your information and we'll call you back as soon as possible to discuss your legal needs.",
    "T48": "Request a call back",
  
 
    }
  };

// Function to choose iframe based on language

function go(url){
  document.getElementById('JotFormIFrame-231485056021246').src= url;
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
  go('https://form.jotform.com/231485056021246?language=fr-CA&dropdown=hidden') ;

} else if (lang=== "en"){
  go('https://form.jotform.com/231485056021246?language=en-CA&dropdown=hidden') ;
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
  go('https://form.jotform.com/231485056021246?language=fr-CA&dropdown=hidden') ;

} else if (lang=== "en"){
  go('https://form.jotform.com/231485056021246?language=en-CA&dropdown=hidden') ;
}  

// end of handling above request
     


    
    // update localStorage key
    if('localStorage' in window){
         localStorage.setItem('uiLang', lang);
         console.log( localStorage.getItem('uiLang') );
    }

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
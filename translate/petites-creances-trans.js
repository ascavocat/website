var arrLang = {
    "fr": {

    // head
    "TITLE": "Services avec un avocat en ligne pour les petites créances ",
    "KEYWORDS": "Petites créances, avocat petites créances",

    "DESCRIPTION": "ASC Avocat offre des services avec un avocat en ligne pour les petites créances à des tarifs avantageux. ",
    

    // body
        // Navigation bar
    "SERVICES": "Services",
    "HOW": "Comment ça marche",
    "CABINET": "Notre Cabinet",

    "INFO-J": "Info juridique",
    "CONTACT": "Contact",
    "CONSULTATION": "Consultation en ligne",
        // Footer
    "RIGHTS": "Services conçus et mis en oeuvre par ASC Avocat - Tous droits réservés",

    
    "T1":"SERVICES JURIDIQUES EN" ,
    "T2":"LIGNE" ,
    "T3":"Petites créances" ,
    "T4":"Des solutions juridiques en ligne avec l'accompagnement et les conseils d'un avocat." ,
    "T5":"Comment ça marche" ,
    "T5-1":"Demander un rappel téléphonique" ,

    "T6":"Divers services sont disponibles exclusivement en ligne avec des tarifs raisonnables." ,
    "T7":"ASC Avocat pour des solutions juridiques simples et abordables en ligne" ,
    "T8":"Membre du Barreau du Québec" ,
    "T9":"Membre de l'Association du Barreau Canadien" ,
    "T10":"Services juridiques à la fine pointe de la technologie" ,
    "T11":"Services en droit de la famille exclusivement en ligne" ,

    "PC": "Petites Créances - Services en ligne",
    "AP": "À partir de ",

    "DESCRIP1": "Un avocat vous accompagne pour les services demandés.",
  
    "TXT1": "Mise en demeure",
    "TXT2": "Réponse à une mise en demeure",
    "TXT3": "Révision de documents et analyse du dossier",
    "TXT4": "Coaching judiciaire pour l'audience",
    "TXT5": "100% service en ligne",
    "TXT6": "Aucun déplacement nécessaire, tout est en ligne",
    "TXT7": "COMMENCER",
    "TXT8": "Services fournis par un avocat",











    },
    //**********************************************************************

    "en": {

    // head
    "TITLE": "Services with a small claims lawyer online",
    "KEYWORDS": "Small claims, small claims lawyer",

    "DESCRIPTION": "ASC Avocat offers services with an online lawyer for small claims at affordable rates. ",
    

    // body
        // Navigation bar
    "SERVICES": "Services",
    "HOW": "How it works",
    "CABINET": "Our law firm",
    "INFO-J": "Legal Info",
    "CONTACT": "Contact",
    "CONSULTATION": "Online Consultation",
        // Footer
    "RIGHTS": "Services designed and implemented by ASC Lawyer - All rights reserved.",

      
    "T1": "LEGAL SERVICES" ,
    "T2": " ONLINE" ,
    "T3": "Small Claims Services" ,
    "T4": "Online legal solutions with the accompaniment and advice of a lawyer." ,
    "T5": "How it works" ,
    "T5-1":"Request a call back" ,
    "T6": "Various services are available exclusively online with a lawyer at affordable rates." ,
    "T7": "ASC Avocat for simple and affordable legal solutions online" ,
    "T8": "Member of the Quebec Bar" ,
    "T9": "Member of the Canadian Bar Association" ,
    "T10": "Member of the Canadian Bar Association" ,
    "T11": "Small Claims services exclusively online" , 


    "PC": "Small Claims Services",
    "AP": "From ",


   
   
    "DESCRIP1": "A Lawyer will accompany you with a selected services",
    
    
    "TXT1": "Demand Letter",
    "TXT2": "Response to a demand letter",
    "TXT3": "Documents review and analysis",
    "TXT4": "Judicial Court Coaching",
    "TXT5": "100% online service",
    "TXT6": "No trip required, everything is online",
    "TXT7": "START",
    "TXT8": "Services provided by a lawyer",
    
   
 
    }
  };


 
// Function to choose iframe based on language

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

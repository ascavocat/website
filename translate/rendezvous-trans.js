var arrLang = {
    "fr": {

    // head
    "TITLE": "ASC Avocat — Cabinet d'avocat Montréal, Laval et Longueuil",
    "KEYWORDS": "avocat, cabinet d'avocat, avocat Montréal, avocat Laval, avocat Longueuil, avocat droit civil, avocat droit commercial, avocat droit des affaires, avocat droit corporatif, avocat droit de la famille",

    "DESCRIPTION": "ASC Avocat offre des services juridiques adaptés selon les besoins de chaque client en droit civil, droit des affaires, droit immobilier, et en droit de la famille. En outre, notre cabinet d'avocat offre des services juridiques en ligne grâces à des technologies innovantes à des tarifs abordables à la portée de tous.",
    

    // body
        // Navigation bar
    "HOME": "Accueil",
    "CABINET": "Notre cabinet",
    "SERVICES": "Services",
    "CONTACT": "Contact",
    "CONSULTATION": "Consultation en ligne",
        // Footer
    "RIGHTS": "Services conçus et mis en oeuvre par ASC Avocat - Tous droits réservés",

    "T1":"PRISE DE",
    "T2":"RENDEZ-VOUS À ASC AVOCAT",
    "T3":"un avocat à votre disposition pour vous offrir une expertise de qualité, un service personnalisé et des conseils juridiques adaptés à vos besoins spécifiques.",
    "T4":"Consultation en ligne",

    
    "T5":"UN ACCOMPAGNEMENT PERSONNALISÉ POUR VOS BESOINS JURIDIQUES",
    "T6":"Chez ASC Avocat, nous prenons le temps de discuter en profondeur de vos défis juridiques particuliers pendant la consultation. Nous nous réjouissons de pouvoir vous accompagner dans votre parcours juridique et de vous offrir un service professionnel et de qualité.",
    "T7":"Rendez-vous par téléphone",
    "T8":"Si vous avez des questions ou si vous préférez prendre rendez-vous par téléphone, veuillez nous envoyer vos informations par notre formulaire de contact ou par email et nous vous rappelerons aussitôt que possible.",
    "T9":"Demandez à être rappelé",







    },
    //**********************************************************************

    "en": {

    // head
    "TITLE": "ASC Avocat - Law firm Montreal, Laval and Longueuil",
"KEYWORDS": "lawyer, law firm, lawyer Montreal, lawyer Laval, lawyer Longueuil, civil lawyer, commercial lawyer, business lawyer, corporate lawyer, family lawyer",

    "DESCRIPTION": "ASC Avocat offers legal services tailored to the needs of each client in civil law, business law, real estate law, and family law. In addition, our law firm offers online legal services through innovative technologies at affordable rates for everyone.",
    

    // body
        // Navigation bar
    "HOME": "Home",
    "CABINET": "Our law firm",
    "SERVICES": "Services",
    "CONTACT": "Contact",
    "CONSULTATION": "Online consultation",
        // Footer
    "RIGHTS": "Services designed and implemented by ASC Avocat - All rights reserved",

    "T1": "BOOK AN",
    "T2": "APPOINTMENT AT ASC AVOCAT",
    "T3": " a lawyer at your disposal to provide you with quality expertise, personalized service and legal advice tailored to your specific needs.",
    "T4": " Online consultation",

    "T5": "PERSONALIZED ASSISTANCE FOR YOUR LEGAL NEEDS",
    "T6": "At ASC Lawyer, we take the time to discuss your particular legal challenges in depth during the consultation. We look forward to accompanying you on your legal journey and providing you with professional and quality service.",
    "T7": "Appointment by phone",
    "T8": "If you have any questions or would prefer to book an appointment by phone, please send us your information through our contact form or by email and we will call you back as soon as possible.",
    "T9": " Request a call back",
 
    }
  };

// Function to choose iframe based on language

function go(url){
  document.getElementById('calendar').src= url;
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

/// handling request for appropriate form based on user language
if (lang=== "fr"){
  go('https://outlook.office365.com/owa/calendar/ASCAvocat@asc-avocat.ca/bookings/') ;

} else if (lang=== "en"){
  go('https://outlook.office365.com/owa/calendar/ASCAvocatCopy@asc-avocat.ca/bookings/') ;
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
  go('https://outlook.office365.com/owa/calendar/ASCAvocat@asc-avocat.ca/bookings/') ;

} else if (lang=== "en"){
  go('https://outlook.office365.com/owa/calendar/ASCAvocatCopy@asc-avocat.ca/bookings/') ;
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
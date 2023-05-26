var arrLang = {
    "fr": {

    // head
    "TITLE": "Cabinet d'avocat en droit de la famille",
    "KEYWORDS": "avocat droit de la famille, avocat spécialisé en droit de la famille, cabinet d'avocat droit de la fmaille, avocat droit de la famille Montréal, avocat droit de la famille Laval, avocat ddroit de la famille Longueuil, avocat divorce, avocat séparation",

    "DESCRIPTION": "ASC Avocat droit de la famille offre des solutions juridiques adaptées aux besoins de ses clients ainsi qu'une représentation vigoureuse pour protéger les droits de ces derniers. En outre, le cabinet d'avocat spécialisé en droit de la famille donne des conseils stratégiques à ses clients afin d'obtenir les meilleurs resultats .",
    

    // body
        // Navigation bar
    "HOME": "Accueil",
    "CABINET": "Notre cabinet",
    "SERVICES": "Services",
    "CONTACT": "Contact",
    "CONSULTATION": "Consultation en ligne",
        // Footer
    "RIGHTS": "Services conçus et mis en oeuvre par ASC Avocat - Tous droits réservés",

    "T1":"AVOCAT DROIT DE LA FAMILLE",
    "T2":"Des solutions juridiques adaptées selon vos besoins",
    "T3":"Une représentation vigoureuse pour protéger vos droits",
    "T4":"Des conseils stratégiques dans le but d'obtenir le meilleur resultat",
    "T5":"Des services juridiques à des tarifs compétitifs",
    "T6":"Prendre un rendez-vous",
    "CITY":"Montréal, Laval, Longueuil",
    "PHONE":"(514) 600-5554",



   

    "T42":"DROIT DE LA FAMILLE",
    "T43":"En matière de droit de la famille, ASC Avocat comprend les enjeux émotionnels et financiers impliqués. Nous savons que les affaires de droit familial peuvent être sensibles et chargées d'émotion, c'est pourquoi nous serons à vos côtés pour vous guider à travers ce processus complexe.Nous pouvons vous conseiller et représenter avec compassion et professionnalisme dans diverses situations familiales:",
    "T43-1":"Divorce ou séparation",
    "T43-2":"rupture de conjoints de fait",
    "T43-3":"Garde d'enfants et droits d'accès",
    "T43-4":"Demande en fixation de pension alimentaire",
    "T43-5":"Contrats matrimoniaux",
    "T43-6":"Déchéance de l'autorité parentale",
    "T43-7":"Partage des biens",

    "T44":"Les litiges familiaux peuvent être à la fois émotionnellement et financièrement éprouvants. C'est pourquoi vous avez besoin d'un avocat en droit de la famille pour défendre vos droits. ASC Avocat est reconnu pour son dévouement à la défense des droits de ses clients devant les tribunaux.",
    "T45":"Si vous avez besoin d'un avocat spécialisé en droit de la famille, contactez-nous dès aujourd'hui pour une consultation. Nous sommes prêts à vous aider à naviguer dans le monde complexe du droit de la famille.",

    "T46":"Demander un rappel téléphonique",
    "T47":"Laissez-nous vos informations, nous vous rappelerons aussitôt que possible pour cerner vos besoins juridiques.",
    "T48":"Demander un rappel téléphonique",

   

    },
    //**********************************************************************

    "en": {

    // head
    "TITLE": " Family Law  Firm",
    "KEYWORDS": "family lawyer, family attorney, family law firm, family  lawyer Montreal, family  lawyer Laval, family  lawyer Longueuil, divorce lawyer, separation lawyer",

    "DESCRIPTION": "ASC Family Lawyer offers legal solutions tailored to the needs of its clients, as well as vigorous representation to protect their rights. In addition, the family law firm provides strategic advice to its clients to achieve the best results .",
    

    // body
        // Navigation bar
    "HOME": "Home",
    "CABINET": "Our law firm",
    "SERVICES": "Services",
    "CONTACT": "Contact",
    "CONSULTATION": "Online consultation",
        // Footer
    "RIGHTS": "Services designed and implemented by ASC Avocat - All rights reserved",

    "T1": "FAMILY LAWYER",
    "T2": "Legal solutions tailored to your needs",
    "T3": "Vigorous representation to protect your rights",
    "T4": "Strategic advice in order to obtain the best result",
    "T5": "Legal services at competitive rates",
    "T6": " Book an appointment",
    "CITY": "Montreal, Laval, Longueuil",
    "PHONE":"(514) 600-5554",

    
   
    "T42": "FAMILY LAW",
    "T43": "When it comes to family law, ASC Lawyer understands the emotional and financial issues involved. We know that family law matters can be sensitive and emotional, which is why we will be by your side to guide you through this complex process.We can provide compassionate and professional advice and representation in a variety of family situations:",
    "T43-1": "Divorce or separation",
    "T43-2": "Separation of common law spouses",
    "T43-3": "Child custody and access rights",
    "T43-4": "Application for determination of child support",
    "T43-5": "Matrimonial contracts",
    "T43-6": "Deprivation of parental authority",
    "T43-7": "Division of property",

    "T44": "Family disputes can be both emotionally and financially challenging. This is why you need a family law attorney to defend your rights. ASC Lawyer is known for our dedication to defending our clients' rights in court.",
    "T45": "If you need a family law lawyer, contact us today for a consultation. We are ready to help you successfully navigate the complex world of family law.",


    "T46": "Request a call back",
    "T47": "Leave us your information and we'll call you back as soon as possible to discuss your legal needs.",
    "T48": "Request a call back",
  
 
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
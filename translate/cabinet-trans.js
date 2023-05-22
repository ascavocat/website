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

    "T1":"Montréal — Laval — Longueuil",
    "T2":"CABINET D'AVOCAT",
    "T3":"pour des solutions juridiques adaptées selon les besoins de chaque client.",
    "T4":"Prendre un rendez-vous",
    "T5":"Solutions juridiques simples et adaptées au besoins de chaque client.",
    "T6":"Membre du Barreau du Québec",
    "T7":"Membre de l'Association du Barreau Canadien",

    "T8":"Services juridiques à la fine pointe de la technologie",
    "T9":"Des services disponibles 100% en ligne",
    "T10":"NOS VALEURS SONT AU CŒUR DE NOTRE PRATIQUE",

    "T10-1":"COMPÉTENCE - DÉVOUEMENT - LOYAUTÉ - CONFIANCE ",

    "T11":"Notre cabinet d'avocat représente avec détermination et zèle des clients en droit des affaires, droit civil, droit immobilier et en droit de la famille. L'étendue de notre expertise nous permet de servir les besoins juridiques présents et futurs de nos clients. ASC Avocat se considère comme un véritable partenaire dans ce processus, et nous sommes passionnés par le fait d'accompagner nos clients à chaque étape de leur dossier dans le but d'obtenir une issue favorable.",
    "T12":"À PROPOS DU FONDATEUR ",
    "T13":"Le cabinet d'avocat a été fondé par Me Aboubacar Sidiki Coulibaly. Un avocat hautement déterminé, confiant et dévoué, avec un grand sens des valeurs, une passion pour trouver des solutions juridiques aux problèmes des clients. Me Coulibaly offre un service personnalisé en fonction des besoins de chaque client, et ce, avec des honoraires justes et raisonnables. Il intervient en litige civil et commercial, en droit d'immobilier, en droit des affaires et des transactions transfrontalières ainsi qu'en droit de la familille",
    "T14":"Me Coulibaly a effectué ses formations juridiques et d'avocat à l'École du Barreau du Québec, l'Université de Montréal, l'Université de Caroline du Nord (USA), et à la Faculté des Sciences Juridiques (Mali).",
    "T15":"Passionné de l'informatique, Me Coulibaly est aussi titulaire de certificat professionnel en science de l'informatique à l'université Harvard.",
    "T16":"POURQUOI CHOISIR ASC AVOCAT ?",
    "T17":"Nous représentons chaque client selon ses besoins juridiques spécifiques avec détermination et zèle. En outre, nos clients benecient de nos compétences et expériences pour la résolution de leurs dossiers, et ce, avec des honoraires justes et raisonnables.",
    "T18":"Consulter nos services juridiques",
    "T19":"Solutions juridiques simples, convenables et adaptées au besoin de chaque client.",
    "T20":"Services disponibles",
    "T21":"Contactez-nous",






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

    "T1": "Montréal - Laval - Longueuil",
    "T2": "LAW FIRM",
    "T3": "for legal solutions tailored to the needs of each client.",
    "T4": " Book an appointment",
    "T5": "Simple legal solutions tailored to each client's needs.",
    "T6": "Member of the Quebec Bar",
    "T7": "Member of the Canadian Bar Association",

    "T8": " Legal services at the cutting edge of technology",
    "T9": "Legal Services available 100% online",
    "T10": "OUR VALUES ARE AT THE HEART OF OUR LAW PRACTICE",
    "T10-1": "COMPETENCE - DEDICATION - LOYALTY - TRUST",
    "T11": "Our law firm represents clients with determination and zeal in business law, civil law, real estate law and family law. The breadth of our expertise allows us to serve the present and future legal needs of our clients. ASC Avocat considers itself a true partner in the process, and we are passionate about assisting our clients every step of the way to a successful outcome.",
    "T12": "ABOUT THE FOUNDER ",
    "T13": "The law firm has been founded by Me Aboubacar Sidiki Coulibaly. A highly determined, confident and dedicated lawyer, with a great sense of values, a passion for finding legal solutions to clients' problems. Me Coulibaly offers a personalized service according to the needs of each client, with fair and reasonable fees. He intervenes in civil and commercial litigation, real estate law, business law and cross-border transactions as well as in family law.",
    "T14": "Mr. Coulibaly has completed his legal studies at the Quebec Bar School, the University of Montreal, the University of North Carolina (USA), and the Faculty of Legal Sciences (Mali)",
    "T15": "Passionate about computer science, Me Coulibaly also holds a professional certificate in computer science from Harvard University.",
        "T16": "WHY CHOOSE ASC AVOCAT?",
    "T17": "We provide each client with representation according to their specific legal needs with determination and zeal. In addition, our clients benefit from our skills and experience in resolving their cases, and we do so with fair and reasonable fees.",
    "T18": " Check out our legal services",
    "T19": "Simple, convenient and customized legal solutions",
    "T20": "Available services",
    "T21":"Contact us",
 
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
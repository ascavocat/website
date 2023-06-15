var arrLang = {
    "fr": {

    // head
    "TITLE": "Services juridiques en ligne de ASC Avocat",
    "KEYWORDS": "avocat en ligne, cabinet d'avocat en ligne, avocat en ligne Montréal, avocat en ligne Laval, avocat en ligne Longueuil, avocat droit civil, avocat droit commercial, avocat droit des affaires, avocat droit corporatif, avocat droit de la famille",

    "DESCRIPTION": "ASC Avocat en ligne offre des services juridiques pour ses client en droit civil, droit des affaires, petites créances, et en droit de la famille. En effet, notre cabinet d'avocat offre des services juridiques en ligne grâces à des technologies innovantes à des tarifs abordables à la portée de tous grâces à des technologies innovantes.",
    

    // body
        // Navigation bar
    "HOME": "Accueil",
    "CABINET": "Notre cabinet",
    "SERVICES": "Services",
    "CONTACT": "Contact",
    "CONSULTATION": "Consultation en ligne",
    "INFO-J": "Info juridique",

        // Footer
    "RIGHTS": "Services conçus et mis en oeuvre par ASC Avocat - Tous droits réservés",

    "T1":"Développer",
    "T2":"DES SERVICES D'AVOCAT EN LIGNE",
    "T3":"accessibles et abordables pour nos clients.",
    "T4":"Comment ça marche",
    "T5":"SERVICES D'AVOCAT EN LIGNE À DES PRIX ABORDABLES",
    "T6":"ASC Avocat est dédié à fournir des services juridiques en ligne à des prix très compétitifs. Ces services juridiques sont 100% en ligne avec des tarifs abordables et à la portée de tous. Nous nous démarquons par une approche innovatrice des services juridiques afin de mieux servir nos clients. ",
    "T6-1":"SERVICES JURIDIQUES 100% EN LIGNE",
    "T6-2":"Notre cabinet d'avocat est fier de servir nos clients grâce à des moyens technologiques developpés par ASC Avocat. Ces services sont exclusivement disponibles pour nos client en ligne et ils n'ont pas besoin de se déplacer pour venir à notre bureau d'avocat.",
   
    "T6-5":"NOS DOMAINES D'EXPERTISES POUR LES SERVICES EN LIGNE",

    "T7":"Droit des affaires",
    "DETAILS":"Consultez les services",
    "T8":"Regroupe nos services 100% en ligne en droit des sociétés, révision des contrats, rédaction des contrats commerciaux sur mesures, avis juridique etc.",
    "T9":"Droit civil",
    "T10":"Focaliser sur les procédures non contentieuses 100% en ligne, comme le changement de nom,  tutelle, protection au majeur, radiation d'inscription  etc.",
    "T11":"Petites créances",
    "T12":"Concerne nos services pour les dossiers des petites créances: consultation, mise en demeure, révision de la demande, préparation pour l'audience. ",
    "T13":"Droit de la famille",
    "T14":"Concerne les procédures amiables en matière familiale, comme le divorce amiable, séparation amiable, fixation de la pension alimentaire à l'amiable, etc.",
    "T15":"Obtenir de l'aide pour nos services en ligne",
    "T16":"Vous pouvez demander de vous rappeler afin de vous guider par rapport à l'un de nos services en ligne.",
    "T17":"Demander un retour d'appel",
    






    },
    //**********************************************************************

    "en": {

    // head
    "TITLE": "Online legal services of ASC Avocat",
"KEYWORDS": "lawyer online, law firm online, online lawyer Montreal, online lawyer Laval, lawyer Longueuil, civil lawyer, commercial lawyer, business lawyer, corporate lawyer, family lawyer",

    "DESCRIPTION": "ASC Avocat offers online legal services by lawyer for its clients in civil law, business law, small claims, and family law. Our law firm online legal services is through innovative technologies at affordable rates for everyone.",
    

    // body
        // Navigation bar
    "HOME": "Home",
    "CABINET": "Our law firm",
    "SERVICES": "Services",
    "CONTACT": "Contact",
    "CONSULTATION": "Online consultation",
    "INFO-J": "Legal info",

        // Footer
    "RIGHTS": "Services designed and implemented by ASC Avocat - All rights reserved",

    "T1": "Develop",
    "T2": "ONLINE LAWYER SERVICES",
    "T3": "accessible and affordable for our clients.",
    "T4": "How it works",
    "T5": "AFFORDABLE ONLINE LAWYER SERVICES",
    "T6": "ASC Lawyer is dedicated to providing online legal services at very competitive prices. These legal services are 100% online with affordable rates that everyone can afford. We stand out with an innovative approach to legal services to better serve our clients. ",
    "T6-1": "100% ONLINE LEGAL SERVICES",
    "T6-2": "Our law firm is proud to serve our clients through technology developed by ASC Avocat. These services are exclusively available to our clients online and they don't need to comme in our law office.",
   
    "T6-5": "OUR AREAS OF EXPERTISE FOR ONLINE SERVICES",

    "T7": "Business Law",
    "DETAILS": " Check the services",
    "T8": "Includes our 100% online services in corporate law, review of contracts, drafting of commercial contracts, legal advice etc.",
        "T9": "Civil Law",
    "T10": "Focus on 100% online non-contentious procedures, such as name change, guardianship, protection of adults, removal of registration etc.",
        "T11": "Small claims",
    "T12": "Concerns our services for small claims cases: consultation, demand letter, review of the application, preparation for the hearing. ",
        "T13": "Family Law",
    "T14": "Concerns joint procedures in family matters, such as joint divorce, joint separation, joint determination of child support, etc.",
    "T15": "Get help for our online services",
    "T16": "You can request a call back to guide you through one of our online services.",
    "T17": "Request a call back",
 
    }
  };

// Function to change url

function goto(url){
  document.getElementById('info-sligne').href= url;
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

// handling request for appropriate url
if (lang=== "fr"){
  goto('https://info-juridique.asc-avocat.ca/') ;

} else if (lang=== "en"){
  goto('https://info-legal.asc-avocat.ca/') ;
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

    // handling request for appropriate url
    if (lang=== "fr"){
      goto('https://info-juridique.asc-avocat.ca/') ;

    } else if (lang=== "en"){
      goto('https://info-legal.asc-avocat.ca/') ;
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
var arrLang = {
    "fr": {

    // head
    "TITLE": "ASC Avocat — Cabinet légal Montréal, Laval et Longueuil",
    "KEYWORDS": "avocat, cabinet d'avocat, avocat Montréal, avocat Laval, avocat Longueuil, avocat droit civil, avocat droit commercial, avocat droit des affaires, avocat droit corporatif, avocat droit de la famille",

    "DESCRIPTION": "ASC Avocat offre des services juridiques adaptés selon les besoins de chaque client dans le domaine des affaires, immobilier , civil, et familial.",
    

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
    "T2":"DES SERVICES D'AVOCAT ADAPTÉS",
    "T3":"selon les besoins de chaque client.",
    "T4":"Prendre un rendez-vous",
    "T5":"SERVICES D'AVOCAT À DES PRIX COMPÉTITIFS",
    "T6":"ASC Avocat est dédié à fournir des solutions juridiques adaptées selon les besoins de chaque client à des prix compétitifs. Notre cabinet d'avocat offre aussi des services juridiques 100% en ligne avec des tarifs abordables et à la portée de tous. Nous nous démarquons par une approche innovatrice des services juridiques et la représentation avec zèle de nos clients. ",
    "T6-1":"PRATIQUE DANS LES ZONES METROPOLITAINES",
    "T6-2":"Notre cabinet d'avocat est fier de servir les régions métropolitaines de Montréal, Laval et Longueuil. Nous représentons nos clients avec détermination et zèle devant les instances judiciaires concernées dans le but d'obtenir une issue favorable dans leur dossier.",
    "T6-3":"UN SAVOIR-FAIRE POUR VOS TRANSACTIONS TRANSFRONTALIÈRES",
    "T6-4":"ASC Avocat possède également une solide expertise en matière de transactions transfrontalières. Nous sommes disponibles pour conseiller et représenter les entreprises canadiennes dans leurs transactions dans l'espace OHADA ou les entreprises africaines pour leurs besoins juridiques en Amérique du Nord.",
    "T6-5":"NOS DOMAINES D'EXPERTISES",

    "T7":"Droit des affaires",
    "DETAILS":"Consultez les détails",
    "T8":"Regroupe nos services en droit commercial, droit des sociétés, droit des assurances droits des transactions, droit international privé, etc.",
    "T9":"Droit civil",
    "T10":"Focalisé sur le droit des obligations, comme la responsabilité civile ou contractuelle, les contrats, droit des personnes, etc.",
    "T11":"Droit immobilier",
    "T12":"Axé sur des questions inhérentes à la propriété immobilière, aux hypothèques, aux contrats de construction ou de location, aux règles de la copropriété, etc. ",
    "T13":"Droit de la famille",
    "T14":"Concerne les questions de divorce, séparation, garde d'enfants, fixation de la pension alimentaire, partage des biens, etc.",
    "T15":"Consultez nos services juridiques 100% en ligne",
    "T16":"Solutions juridiques convenables et abordables pour tous.",
    "T17":"Consulter nos services en ligne",
    "T17-1":"UN ACCOMPAGNEMENT PERSONNALISÉ POUR VOS BESOINS JURIDIQUES",
    "T17-2":"Chez ASC Avocat, nous nous considérons comme un partenaire essentiel dans votre parcours juridique. Passionnés par notre métier, nous vous accompagnons à chaque étape du processus juridicaire. Notre vaste expérience nous permet de répondre à vos besoins juridiques actuels et futurs.",






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
    "INFO-J": "Legal info",
        // Footer
    "RIGHTS": "Services designed and implemented by ASC Avocat - All rights reserved",

    "T1": "Develop",
    "T2": "TAILORED LAWYER SERVICES",
    "T3": " based on the needs of each client.",
    "T4": " Book an appointment",
    "T5": " LAWYER SERVICES AT COMPETITIVE PRICES",
    "T6": "ASC Avocat is dedicated to providing legal solutions tailored to each client's needs at competitive prices. Our law firm also offers 100% online legal services with affordable rates for everyone. We stand out for our innovative approach to legal services and zealous representation of our clients. ",
    "T6-1": "PRACTICE IN METROPOLITAN AREAS",
    "T6-2": "Our law firm is very proud to serve the metropolitan areas of Montreal, Laval and Longueuil. We represent our clients with determination and zeal before the relevant judicial authorities in order to obtain a favorable outcome in their case.",
    "T6-3": " CROSS BORDER TRANSACTION EXPERTISE",
    "T6-4": "ASC Avocat also has a solid expertise in cross-border transactions. We are available to advise and represent Canadian companies in their transactions in the OHADA area or African companies for their legal needs in North America.",
    "T6-5": "OUR AREAS OF EXPERTISE",
    "T7": "Business Law",
    "DETAILS": " Check the details",
    "T8": " Regroups our services in commercial law, corporate law, transactional law, private international law, etc.",
    "T9": "Civil Law",
    "T10": "Focus on the law of obligations, such as civil or contractual liability, contracts, insurance law, personal law, etc.",
    "T11": "Real estate law",
    "T12": "Focus on issues inherent in real estate ownership, mortgages, contracts for construction or rental, condominium rules, etc. ",
    "T13": "Family law",
    "T14": "Concerns issues related to divorce, separation, child custody, alimony, property division, etc.",
    "T15": " Check out our 100% online legal services",
    "T16": "Affordable and convenient legal solutions for everyone.",
    "T17": "View our legal services online",
    "T17-1": "PERSONALIZED ASSISTANCE FOR YOUR LEGAL NEEDS",
    "T17-2": "At ASC Avocat, we consider ourselves an essential partner in your legal journey. Passionate about the practice of law, we accompany you at each step of the legal process. Our extensive experience allows us to meet your current and future legal needs.",
 
    }
  };


 // Function to change url

function goto(url){
  document.getElementById('info-index').href= url;
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
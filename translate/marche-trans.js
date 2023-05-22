var arrLang = {
    "fr": {

    // head
    "TITLE": "Comment ça marche les services juridiques de ASC Avocat",
    "KEYWORDS": "Comment ça marche les services de ASC Avocat, Comment ça marche les Services jurdiques en ligne, Service jurdique en ligne, ASC Avocat, droit de la famille, petites créance, droit des affaires, droit des sociétés, droit civil",

    "DESCRIPTION": "Pour savoir comment ça marche les services de ASC Avocat, veuillez consultez la page site web pour plus de détails. Le processus du service juridique en ligne est expliqué de façon simple sur notre siteweb.",
    

   // body
        // Navigation bar
        "HOME": "Accueil",
        "CABINET": "Notre cabinet",
        "SERVICES": "Services",
        "CONTACT": "Contact",
        "CONSULTATION": "Consultation en ligne",
            // Footer
        "RIGHTS": "Services conçus et mis en oeuvre par ASC Avocat - Tous droits réservés",

    "T1":"COMMENT ÇA",
    "T2":" MARCHE",
    "T3":"les services juridiques en ligne de ASC Avocat",
    "T4":"sans deplacement, beneficiez de l'expertise d'un avocat en ligne pour vos besoins juridiques spécifiques.",
    "T5":"Commander le service en ligne",

    "T6": "Payer en ligne en toute sécurité le service choisi par carte de crédit ou carte de débit ou le compte paypal.",

    "T7":"Remplir le formulaire en ligne",
    "T8":"Répondre à toute question requise ou pertinente dans le formulaire web securisé de ASC Avocat.",
    "T9":"Communication avec le client",
    "T10":"ASC Avocat communique avec le client selon le mode de communication choisi pour confirmer le service et obtenir toute autre information pertinente s'il y a lieu.",
    "T11":"Analyse par un avocat",

    "T12":"Un avocat analyse le cas en fonction des besoins juridiques spécifiques du client. Il contacte le client par vidéo ou téléphone conformement au service demandé et lui conseille, discute de stratégies, fait une ou des  recommendation(s), le cas échéant.",

    "T13":"Accompagnement  d'un avocat",
    "T14":"Un avocat accompagne tout au long le client afin de répondre à ses besoins juridiques spécifiques par différents actes comme la rédaction des actes ou procédures et de les produire s'il y a lieu, le tout conformément au service demandé.",

    "T15":"Finalisation du dossier",

    "T16":"Le client obtient tous les originaux ou les copies des documents préparés par l'avocat soit par courriel ou par courrier selon le cas. Une copie du dossier sera aussi conservée electroniquement par ASC Avocat",

    "T17":"Aucun frais caché, tout est transparent !",
    "ONLINE":"Consulter les services en ligne",





    },
    //**********************************************************************

    "en": {

    // head
    "TITLE": "How it works ASC Avocat online legal services",
  "KEYWORDS": "How it works with ASC Avocat online legal services, How it works with Online Legal Services, Online Legal Services, ASC Avocat, family law, small claims, business law, corporate law, civil law",

  "DESCRIPTION": "To know how it all works, please consult the website for more details. The process of the online legal service is explained in a simple way",
    

     // body
        // Navigation bar
        "HOME": "Home",
        "CABINET": "Our law firm",
        "SERVICES": "Services",
        "CONTACT": "Contact",
        "CONSULTATION": "Online consultation",
            // Footer
        "RIGHTS": "Services designed and implemented by ASC Avocat - All rights reserved",
    

    "T1": "HOW IT",
    "T2": "WORKS",
    "T3": "ASC Avocat online legal services",
    "T4": "without leaving your place, benefit from the expertise of a lawyer online for your specific legal needs.",
    "T5": "Order the service online",

    "T6": "Pay securely online for the chosen service by credit card or debit card or paypal account.",

    "T7": "Fill out the online form",
    "T8": "Answer any question required or relevant in the secure web form of ASC Avocat",
    "T9": "Communication with the client",
    "T10": "ASC Avocat communicates with the client according to the method of communication chosen to confirm the service and obtain any other relevant information if necessary.",

    "T11": "Analysis by a lawyer",

    "T12": "A lawyer analyzes the case based on the client's specific legal needs. The lawyer contacts the client by video or telephone in accordance with the service requested and advises the client, discusses strategies, and makes a recommendation(s), if applicable.",

    "T13": " A lawyer accompanies the client",
    "T14": "A lawyer accompanies the client throughout the process in order to meet his specific legal needs by various acts such as the drafting of deeds or procedures and to file them if necessary, all in accordance with the service requested.",

    "T15":" Finalizing the file",

    "T16": "The client obtains all originals or copies of the documents prepared by the lawyer either by email or by mail as the case may be. A copy of the file will also be kept electronically by ASC Avocat.",

    "T17": "No hidden fees, everything is transparent!",
    "ONLINE":"Check the online services",


   
 
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
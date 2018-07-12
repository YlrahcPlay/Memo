// Méthode semi-complete
$.ajax({
    url : ".php", // Où envoyer la requête
    method : "", // (GET, POST, PUT)
    // accepts : {}, // Restriction du format de réponse
    data : {}, // Argument(s) à envoyer
    dataType : "", // Type de la réponse. (xml, json, script, html, jsonp, text)
    // dataFilter : , // Préfiltrage de la réponse 
    async : false, // true ou false
    // context : , // Condition d'interprétation de réponse de la requête
    // username : , // Utilisateur si besoin d'authentification
    // password : , // Mot de passe si besoin d'authentification
    // timeout : , // Arret de la requête après un certain temps
    // statusCode : {}, // Gestion de code HTTP
    error : function(request, error) { alert("Erreur : responseText: "+request.responseText);}, // Action en cas d'echec de la requête
    success : function(data) {}, // Action en cas de réussite de la requête
    // complete : function (object, statut) {}, // Action en fin d'appel. (Statut = "success", "notmodified", "nocontent", "error", "timeout", "abort", "parsererror")
});





// Méthode réduite
$.ajax({
    url : ".php", // Où envoyer la requête
    method : "", // (GET, POST, PUT)
    data : {}, // Argument(s) à envoyer
    dataType : "", // Type de la réponse. (xml, json, script, html, jsonp, text)
    async : false, // true ou false
    error : function(request, error) { alert("Erreur : responseText: "+request.responseText);}, // Action en cas d'echec de la requête
    success : function(data) {}, // Action en cas de réussite de la requête
});

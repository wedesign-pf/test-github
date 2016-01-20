var siteUrl="http://192.168.25.22/Signatures/" // URL vers le fichier index.html (utilisé pour localiser les images dans les signature). IMPORTANT: doit se terminer par /
var siteTitle="Logis - Générateur de signatures"; // Titre de l"entête
var wtf="En cas de problème contacter Logis au 40 478 800"; // Texte d"aide en bas de page

var prefixeTel="Tél : +(689) "; // Ajouter devant les n° de téléphone
var prefixeCel="Portable : +(689) "; // Ajouter devant les n° de portable
var prefixeFax="Fax : +(689) "; // Ajouter devant les n° de fax
var separateurTelFax="&nbsp;&nbsp;|&nbsp;&nbsp;"; // séparateur entre les n° de téléphone et de fax

//////////////////////////// 
// SOCIETES
////////////////////////////
var societes = [];

societes.push({
    "titre": "Carrefour Punaauia", 
    "image": "crf_punaauia.png", 
    "couleur": "#004f9f",
    "url": "www.carrefour.pf",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx", 
    "email": "@carrefour.pf",
    "adresse": "BP 13002 Punaauia  |  98713 Tahiti  |  Polynésie française"
});
      
societes.push({
    "titre": "Carrefour Arue", 
    "image": "crf_arue.png", 
    "couleur": "#004f9f",
    "url": "www.carrefour.pf",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx",
    "email": "@carrefour.pf",
    "adresse": "BP 14147 Arue  |  98701 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "Carrefour Faa'a", 
    "image": "crf_faaa.png", 
    "couleur": "#004f9f",
    "url": "www.carrefour.pf",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx", 
    "email": "@carrefour.pf",
    "adresse": "BP 40383 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "Carrefour Taravao", 
    "image": "crf_taravao.png", 
    "couleur": "#004f9f",
    "url": "www.carrefour.pf",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx", 
    "email": "@carrefour.pf",
    "adresse": "BP 40717 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "EasyMarket", 
    "image": "easymarket.png", 
    "couleur": "#004f9f",
    "url": "easymarket.pf",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx", 
    "email": "@easymarket.pf",
    "adresse": "BP 40717 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "Champion", 
    "image": "champion.png", 
    "couleur": "#004f9f",
    "url": "championtahiti.com",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx", 
    "email": "@champion.pf",
    "adresse": "BP 40717 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "Cedis", 
    "image": "cedis.png", 
    "couleur": "#004f9f",
    "url": "",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.54.12.49", 
    "email": "@cedis.pf",
    "adresse": "BP 973 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "Sages", 
    "image": "sages.png", 
    "couleur": "#004f9f",
    "url": "",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx", 
    "email": "@sages.pf",
    "adresse": "BP 973 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "Media Nui S.A.V.", 
    "image": "media_nui_sav.png", 
    "couleur": "#004f9f",
    "url": "",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.46.08.23", 
    "email": "@medianuisav.pf",
    "adresse": "BP 13002  |  98717 Punaauia  |  Polynésie française"
});

societes.push({
    "titre": "Smart", 
    "image": "smart.png", 
    "couleur": "#004f9f",
    "url": "",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.47.88.69", 
    "email": "@smart.pf",
    "adresse": "BP 427 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "Opus", 
    "image": "opus.png", 
    "couleur": "#004f9f",
    "url": "",
     "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.47.88.69", 
    "email": "@opus.pf",
    "adresse": "BP 427 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "S.E.G.C", 
    "image": "segc.png", 
    "couleur": "#004f9f",
    "url": "",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx",
    "email": "@segc.pf",
    "adresse": "BP 40383 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "SGH", 
    "image": "sgh.png", 
    "couleur": "#004f9f",
    "url": "",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx",
    "email": "@sgh.pf",
    "adresse": "BP 457 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "SGS", 
    "image": "sgs.png", 
    "couleur": "#004f9f",
    "url": "",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx", 
    "email": "@sgd.pf",
    "adresse": "BP 457 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "SGP", 
    "image": "sgp.png", 
    "couleur": "#004f9f",
    "url": "",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx",
    "email": "@sgd.pf",
    "adresse": "BP 457 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "SHT", 
    "image": "sht.png", 
    "couleur": "#004f9f",
    "url": "",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx",
    "email": "@sht.pf",
    "adresse": "BP 457 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "Sopal", 
    "image": "sopal.png", 
    "couleur": "#004f9f",
    "url": "",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx",
    "email": "@cedis.pf",
    "adresse": "BP 973 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "Pacific Management", 
    "image": "pacific_management.png", 
    "couleur": "#004f9f",
    "url": "",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx",
    "email": "@pacific-management.pf",
    "adresse": "BP 973 Papeete  |  98713 Tahiti  |  Polynésie française"
});

societes.push({
    "titre": "Pacific Plaza", 
    "image": "pacific_plaza.png", 
    "couleur": "#004f9f",
    "url": "www.pacificplaza.pf",
    "nom": "Prénom NOM",
    "poste": "",
    "tel": "40.xx.xx.xx",
    "cel": "",
    "fax": "40.xx.xx.xx",
    "email": "@pacificplaza.pf",
    "adresse": "BP 457 Papeete  |  98713 Tahiti  |  Polynésie française"
});
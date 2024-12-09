/**

path.extname est une méthode du module path de Node.js qui retourne l'extension d'un chemin de fichier. Elle prend en entrée un chemin de fichier et renvoie la partie de l'extension de ce chemin, y compris le point.
**/
/**
  Exercices :

  1. Pour cet exercice vous reprendrez le serveur HTTP de l'exercice précédent.
  
  Votre serveur HTTP doit gérer différents Mime Types. Vous devez faire en sorte que
  le Mime Type soit conforme à l'extension obtenue à partir de la ressource dans l'URL.

  Par exemple :
  - Si l'URL est http://10.2.1.0:4321/photo.jpeg (et que le fichier photo.jpeg existe)
  - Alors l'en-tête de la réponse HTTP doit contenir Content-Type : image/jpeg
  
  Vous devez gérer les Mime Types des formats de fichier suivant : css, js, jpeg, png, pdf, gif.

  La liste des Mime Types autorisés est disponible ici : http://www.iana.org/assignments/media-types/media-types.xhtml
**/

/**
  2. Utiliser votre serveur HTTP pour "servir" votre projet Front End (sur le réseau local).

  Pensez à utiliser l'onglet réseau des outils de développement de votre navigateur Internet pour
  vérifier que vous arrivez bien à télécharger toutes les ressources exigées par votre projet.

  Ajoutez la gestion des Mime Types manquants si nécessaire...
**/

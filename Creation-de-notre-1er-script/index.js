const fs = require ("fs");
 //readFileSync <-lire le contenu d'un fichier
 // whriteFileSync <- écrire un fichier avec un contenu

 fs.writeFileSync ("test.txt" , "Mon deuxieme fichier!");
 console.log("le fichier text a étè crée!");
 const FileContent = fs.readFileSync("test.txt","utf8");
 console.log(FileContent);

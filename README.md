### Backend-baserad webbutveckling <br> Moment3 mongoDb.<br> av: Niklas Smith <br>  student-id : nism2400 <br> Kurs: DT207G

Denna uppgiften gick ut på att kunna skapa och använda sig av en noSQL databas i detta fall mongoDB.  
Använda sig av mongoDB compass (skapar document, collection).  
Använda sig av CRUD som är delete,uppdate,select och insert.   
Skapar crud som du sedan can använda i fronend delen.    
Detta repositories innhåller:  
1. package.json med dev_dependencies cors,express,mongoose och nodemon
2. main.js starta databasen, använder min dev_dependencies, skapar schema (ungefär som tabel)
3. main.js fort skapar mina CRUD delete,uppdate,select och insert. Med get,post,put and delete

tre saker jag har gjort
* Jag har skapat mitt document och collection med mongo compass (och database)
* Använt Schema för skapa tablel och model för att använde det.
* Gjort get,post,put och delete med icke sql frågot istället använda mongoose egna exempelvis updateOne istället för INSERT


min collection för mongoDB:

| collection               |      fält                                                                |
|--------------------------|--------------------------------------------------------------------------|
| WorkexperienceSchema     | _id:ObjectId, companyname:string , jobtitle:string , location:string     |


Hur man använder mitt api:

1. GET /api/jobs  hämtar alla job som finns tillagda.
2. POST /api/jobs  Lägg till nytt job. måste skicka med rätt information i object.
3. PUT /api/jobs/:id  uppdatera ett job baserat på id. måste skicka med rätt information i object.
4. DELETE /api/jobs/:id Ta bort ett job baserat på id. måste skicka med rätt information i object.

exempel på hur object kan se ut och ska har följade fält och uppbyggnad.   

   {
  "companyname" : "namn på företag",   
"jobtitle": "namn på jobtitle",   
    "location": "namn på location"  
}

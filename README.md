Simple browser-sync gulp config 
---

Example of browser-sync with file watcher and proxy json api to server. I need a way to decople front-end from monolite Spring Boot application that contains java and angulat js code. This is just start....

Install globally: 

npm install -g gulp json-server browser-sync

Install locally: 

npm install

Run
---

Start server:
json-server json-server/db.json

Start client:
gulp serve

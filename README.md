# SitioInstrumentosMTI
Este repositorio contiene el proyecto que hicimos para el curso de Aplicaciones Web del MTI de la Universidad Técnica Federico Santa María.

Cuenta con dos repositorios:
1. ClienteWeb: contiene el front-end de la aplicación. Está hecho con Angular
2. ServidorNodejs: contiene el back-end de la aplicación. Basicamente es un conjunto de servicios RESTful para que la aplicación Web pueda interactuar con los datos.

Pasos a seguir:
1. Descargar las carpetas ClienteWeb y ServidorNodejs en el directorio que quieran. Yo lo hice en Linux pero imagino que ustedes lo harán en Windows así que asumo que lo dejaran en algo como c:\SitioInstrumentos\.
2. Instalar node js e iniciar el servidor
3. Instalar http-server y luego iniciar el servidor web en la carpeta donde descargaron ClienteWeb
4. Instalar MongoDB desde https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/ y luego iniciar mongo db asegurandose que está en el puerto por default. 
5. Abrir el browser y probar la aplicación.

Pasos para instalar el servidor nodejs
1. Descargar desde https://nodejs.org/es/download/ y seguir los pasos.
2. Una vez instalado, abrir una consola (terminal o cmd de windows), posicionarse en la carpeta donde descargaron.
  En windows sería algo así: cd c:\SitioInstrumentos\ServidorNodejs
3. Iniciar el servidor nodejs con el comando: node index.html

Pasos para isntalar el cliente web
1. Abrir una consola (terminal o cmd de windows) y instalar el paquete http-server con el siguiente comando:
  npm install http-server -g
2. Una vez instalado deben iniciar con el siguiente comando: 
  http-server c:\SitioInstrumentos\ClienteWeb --cors


Para probar la aplicación deben abrir un browser y colocar localhost:8080/index.html



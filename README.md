# Prueba tecnica NTTDATA

Esta es una prueba técnica para el puesto de saleforce bootcamp de NTTDATA.

## Desarrollado por

- Cesar Ignacio Maquera Ticona

## Tecnologías

- Node.js
- NPM
- Express
- Bootstrap
- jQuery

Estas tecnologías fueron seleccionadas por ser las que tengo conocimiento. Si bien tengo mas experiencia en SAP ABAP subirlo a github es un incoveniente para mi y por practicidad elegi estas tecnologías debido a su practicidad para su revision y que no cuenta con muchos requisitos solo Nodejs.

Utilice Node.js con Express para crear un servidor que consume la api de randomuser para obtener 10 personas aleatorias, estas las guarde en una lista global para se persistida entre peticiones para los fitros de nombre y genero y las muestra en una tabla con filtros para buscar por nombre y genero.

No domido CSS por lo cual opte po utilizar Bootstrap para que se vea bien en cualquier dispositivo y jQuery para hacer las peticiones ajax al servidor.

La estructura del proyecto es la siguiente:

- server.js - archivo principal del servidor
- package.json - archivo de configuracion de npm
- public/ - archivos estaticos de la pagina web
    - index.html 
    - js/
        - app.js 

## Como ejecutar

- npm install
- npm run start

## Como usar

- Abrir el navegador
- ir a http://localhost:3000
- listar a 10 personas aleatorias
- filtrar por nombre
- filtrar por genero



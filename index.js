
//////////////////estudar ////////////////////////
//////////atv no sigaa///////////////////////////


// -->  https://www.freecodecamp.org/portuguese/news/tutorial-de-fetch-api-em-javascript-exemplos-de-post-e-cabecalho/
//  --> https://expressjs.com/pt-br/guide/routing.html
// --> https://expressjs.com/pt-br/starter/installing.html

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


fetch("http://localhost:3000/bjj",{

    method: "GET",
    headers: {"Content-type": "application/json; charset=UTF-8"}

})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err => console.log(err));
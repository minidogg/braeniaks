import * as badel from './badel.js'
import * as Quiz from './quiz.js'
import { settings } from './settings.js'

badel.LoadCSS("/css/global.css")

// try{
//     let testServer = await fetch(settings.serverURL)
// }catch(err){
//     alert(`Unable to reach server at "${settings.serverURL}" Is the server up? Is the server configured to allow this site?`)

// }

const pages = {
    "/quiz.html": Quiz.Page
}

if(pages[window.location.pathname]){
    let pageHTML = pages[window.location.pathname]();

    // document.getElementById("page").replaceChildren(pageHTML)
}else{
    console.log("No page found!");
}
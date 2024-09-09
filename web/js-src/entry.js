import * as badel from './badel.js'

import * as Quiz from './quiz.js'

const pages = {
    "/quiz.html": Quiz.Page
}

if(pages[window.location.pathname]){
    let pageHTML = pages[window.location.pathname]();

    document.getElementById("page").replaceChildren(pageHTML)
}else{
    console.log("No page found!");
}
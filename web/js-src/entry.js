import * as badel from './badel.js'
import * as Quiz from './quiz.js'

badel.LoadCSS("/css/global.css")

const pages = {
    "/quiz.html": Quiz.Page
}

if(localStorage.getItem("serverURL")==null)localStorage.setItem("serverURL", "https://localhost:7026/")

if(pages[window.location.pathname]){
    let pageHTML = pages[window.location.pathname]();

    // document.getElementById("page").replaceChildren(pageHTML)
}else{
    console.log("No page found!");
}
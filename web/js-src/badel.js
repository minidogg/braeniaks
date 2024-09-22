import sanitizeHtml from 'sanitize-html';

/**
 * @description Function used to convert HTML strings into HTML elements at runtime.
 * @param {String} elementText 
 * @param {boolean} sanitize 
 * @returns 
 */
export function ne(elementText, sanitize = false){
    // let elementType = /[\s\S]*?<(.*?)>/.exec(elementText)[1]
    // if(elementType.includes(" ")==true)elementType = elementType.substring(0, elementType.indexOf(" "))
    // let e = document.createElement(elementType)
    let e = document.createElement("div")
    e.style.all = "unset"
    e.innerHTML = sanitize?sanitizeHtml(elementText):elementText
    return e
}
export function sne(elementText, sanitize = true){
    ne(elementText, sanitize)
}

let loadedCss = []
export function LoadCSS(link){
    if(loadedCss.includes(link))return;
    loadedCss.push(link)
    let css = document.createElement('link');
    css.href = link;
    css.rel = "stylesheet"
    document.head.appendChild(css);
}

export function ChangePageContent(pageHTML){
    document.getElementById("page").replaceChildren(pageHTML)
}
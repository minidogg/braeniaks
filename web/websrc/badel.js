import sanitizeHtml from 'sanitize-html';

export function ne(elementText, sanitize = true){
    // let elementType = /[\s\S]*?<(.*?)>/.exec(elementText)[1]
    // if(elementType.includes(" ")==true)elementType = elementType.substring(0, elementType.indexOf(" "))
    // let e = document.createElement(elementType)
    let e = document.createElement("div")
    e.style.all = "unset"
    e.innerHTML = sanitizeHtml(elementText)
    return e
}

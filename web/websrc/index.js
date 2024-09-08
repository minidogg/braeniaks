
import {ne} from './badel.js'
import sanitizeHtml from 'sanitize-html';

let silly = ne=(<>
    <h1 style="color: blue" onclick="a">Hello </h1>
</>)

document.body.appendChild(silly)

var a = 0;
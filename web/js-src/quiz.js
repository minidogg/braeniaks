import {ne, ChangePageContent, LoadCSS} from './badel.js'

export function coolShapeBackground(){
    LoadCSS("/css/background.css")
    return (<>
        <img src="/img/shapes/circle.svg" class="backgroundShape" style="width:20%;left:5%;"/>
        <img src="/img/shapes/square.svg" class="backgroundShape" style="width:30%;left:15%;"/>
        <img src="/img/shapes/triangle.svg" class="backgroundShape" style="width:15%;left:80%;"/>
        <img src="/img/shapes/hexagon.svg" class="backgroundShape" style="width:40%;left:50%;"/>
    </>)
}

export function Page(){
    LoadCSS("/css/quiz.css")


    let content = ne(<>
        ${coolShapeBackground()}
        <form id="pinForm">
            <img src="/img/logo.png"/>
            <input id="pinCode" class="attentionInput" placeholder="Game PIN"/>
            <br/>
            <input type="submit" value="Enter" class="attentionButton"></input>
        </form>
    </>)
    ChangePageContent(content)
}

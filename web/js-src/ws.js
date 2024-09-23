/** *@param {WebSocket} ws */
let ws;
export function Connect(){
    if(typeof(ws)!="undefined"){
        ws.close()
    }
    ws = new WebSocket("https://localhost:7026/")
}

export function Send(){
    
}
// Set this up to actually use localStorage to change and retrieve settings.
class Settings{
    constructor(){
        this.serverURL = "https://localhost:7026/"
    }
}

export const settings = new Settings()
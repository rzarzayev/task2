class Messenger{
    constructor(author,text){
        this.author=author
        this.text=text
        this.show_history=()=>{
            let now = new Date();
            return `${now.getHours()}:${now.getMinutes()}`
        }
        this.send=(author,text)=>{
            console.log(this.show_history()+" "+author+": "+text)
        }
    }
}

let  messenger = new Messenger()
messenger.send('Rza','Salam bro')
messenger.send('Amrakh','Salam bro')


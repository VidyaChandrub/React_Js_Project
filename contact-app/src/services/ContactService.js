import Axios from "axios"


export class ContactService {
    static serverURL = `http://localhost:9000`;

    static getGroups(){
        let dataURL =`${this.serverURL}/groups`;
        return Axios.get(dataURL);
    }

    static getGroup(contact){
        let groupId = contact.groupId
        let dataURL =`${this.serverURL}/groups/${groupId}`;
        return Axios.get(dataURL);
    }

    static getAllContacts(){
        let dataURL = `${this.serverURL}/contacts`;
        return Axios.get(dataURL);
    }

    static getContacts(contactID){
        let dataURL = `${this.serverURL}/contacts/${contactID}`;
        return Axios.get(dataURL);
    }

    static createContact(contact){
        let dataURL = `${this.serverURL}/contacts`;
        return Axios.post(dataURL,contact)
    }

    static updateContact(contact, contactID){
        let dataURL = `${this.serverURL}/contacts/${contactID}`;
        return Axios.put(dataURL,contact)
    }

    static deleteContact(contactID){
        let dataURL = `${this.serverURL}/contacts/${contactID}`;
        return Axios.delete(dataURL) 
    }
}
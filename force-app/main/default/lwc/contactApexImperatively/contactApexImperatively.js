import { LightningElement,track } from 'lwc';
import getContactList from '@salesforce/apex/ContactMethodImperatively.getContactList';
export default class ContactApexImperatively extends LightningElement {

    @track contacts;
    @track error;

    handleLoad() {
        getContactList()
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}
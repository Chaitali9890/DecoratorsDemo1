import { LightningElement,api,track } from 'lwc';

export default class Person extends LightningElement {

    @api location;
        @track 
        user= {
            firstName: "Chaitali",
            lastName: "Chaudhari"
        };
        @api
        updateuser()
        {
            this.user.firstName="Shreya";
            // this.user= {
            //     firstName:"Shreya",
            //     lastName:"Chaudhari"

            // };
        }
    
}
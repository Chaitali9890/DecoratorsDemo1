import { LightningElement,track } from 'lwc';

export default class Parentcom extends LightningElement {

    @track progressValue = 0;
    hanldeProgressValueChange(event) {
      this.progressValue = event.detail;
    }
}
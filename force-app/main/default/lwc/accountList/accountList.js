import { LightningElement,track,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList'

export default class AccountList extends LightningElement {
    @track accounts;
    @wire(getAccountList) accounts;

}
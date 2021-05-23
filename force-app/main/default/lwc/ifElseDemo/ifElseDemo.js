import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {
    isTom = '';
    isJerry = '';

    showTom(){
        this.isjerry = false;
        this.isTom = true;
    }

    showJerry(){
        this.isjerry = true;
        this.isTom = false;
    }
}
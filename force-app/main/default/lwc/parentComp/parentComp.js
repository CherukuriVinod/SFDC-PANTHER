import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    handleSimpleEvent(event){
        /*const message=event.detail.message;
        const pageNo = event.detail.pageno;
        const name = event.detail.staticVal;
        console.log('Message is ', message);
        console.log(' pageno is ', pageNo);
        console.log(' Name is ', name);*/
        console.log(' message is ', event.target.message);
        console.log(' Page No is ', event.target.pageno);
        
    }

    handleClick(){
        this.template.querySelector('c-child-comp').childMethod('After API Function', 120);

    }
}
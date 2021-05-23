import { LightningElement, api, track } from 'lwc';

export default class ChildComp extends LightningElement {
    @api message;
    @api pageno;
    @api contact;
    @track date = new Date();

    @api
    childMethod(messageFromParent, page_no){
        this.date= new Date();
        this.message= messageFromParent;
        this.pageno = page_no;
    }

    handleEvent(){
        /*
        Sept 1- Create Event
        */
        const eventS = new CustomEvent(
            'simple',
            {
                bubbles : true,
                composed : false
            }
        );
          /*
        Sept 2- Dispatch Event
        */
       this.dispatchEvent(eventS);
    }
}
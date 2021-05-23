import { LightningElement } from 'lwc';

export default class IteratorDemo extends LightningElement {
    contacts = [
        {
            Id : 1,
            Name : "Vinod Cherukuri",
            Email : "sfdcpanther@gmail.com",
        },
        {       
            Id : 2,
            Name : "Arjun Cherukuri",
            Email : "anuj@outlook.com"
        },
        {
            Id : 3,
            Name : "Cherukuri Vinod",
            Email : "ankit@hotmail.com"
        }
    ]
}
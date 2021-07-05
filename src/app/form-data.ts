export class FormData {
    constructor(
       public category:string,
       public currentUserEmail:string,
       public description:string,
       public id:string,
       public invoiceNumber:string,
       public invoiceReceiveDate:Date,
       public ipAddress:string,
       public location:string,
       public manufacturer:string,
       public mlfb:string,
       public name:string,
       public owner:string,
       public poNumber:string,
       public projectName:string,
       public remarks:string,
       public serialNumber:number,
       public supportComm:string,
       public workingCondition:string
    ){}
}

import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MessagePageModule } from '../pages/message/message.module';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName = "";
  contNumber ="";
  contacts = [];

  constructor() {}

  savecontact(){
    let contact = {
      name: this.contName,
      number: this.contNumber
    }
    this.contacts.push(contact);
    this.clearField();
  }
    clearField(){
      this.contName="";
      this.contNumber="";
    }

}

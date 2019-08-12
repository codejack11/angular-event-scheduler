import { Component, TemplateRef, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  modalRef: BsModalRef;

  title: string;
  discription: string;
  stime = new Date("12/15/19 00:00:00");
  etime = new Date("12/15/19 23:59:00");
  events: any = [];
  bsValue = new Date();
  

  constructor(private modalService: BsModalService) {}
  
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  
  confirm(): void{
    this.events = [
      ...this.events,
      {
        
        setTitle : this.title,
        setDiscription: this.discription,
        setStartDate: this.bsValue,
        //setEndDate: this.end,
        setSTime: this.stime,
        setETime: this.etime
      }
    ];
    this.modalRef.hide();
    this.modalService
    this.resetModal();
  }
  resetModal(): void{
    this.title = null;
    this.discription = null;
  }

  deleteEvent(eventToDelete: any) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

}

import { Component, TemplateRef, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material';

export interface User {
  startTime: Date;
  endTime: Date;
  title: string;
  description: string;
  eventDate: Date;
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource;
  users: User[] = [];
  
  modalRef: BsModalRef;

  title: string;
  description: string;
  stime = new Date("12/15/19 00:00:00");
  etime = new Date("12/15/19 23:59:00");
  events: any[];
  bsValue = new Date();
  

  constructor(private modalService: BsModalService) {}
  
  ngOnInit(): void{
    this.dataSource = new MatTableDataSource(this.users.slice());
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  
  addItem(): void{
    this.users.push({
      startTime: this.stime,
      endTime: this.etime,
      title: this.title,
      description: this.description,
      eventDate: this.bsValue
    });
    this.dataSource = new MatTableDataSource(this.users);
    /*
    this.events = [
      ...this.events,
      {
        
        setTitle : this.title,
        setdescription: this.description,
        setStartDate: this.bsValue,
        //setEndDate: this.end,
        setSTime: this.stime,
        setETime: this.etime
      }
    ];*/
    this.modalRef.hide();
    this.modalService
    this.resetModal();
  }
  resetModal(): void{
    this.title = null;
    this.description = null;
  }

  deleteEvent(index: number) {
    //this.users = this.users.splice(item, 1);
    const data = this.dataSource.data;
    data.splice(index, 1);

    this.dataSource.data = data;
  }

}
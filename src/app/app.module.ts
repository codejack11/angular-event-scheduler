import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ModalModule, BsDatepickerModule, TimepickerModule  } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  ReactiveFormsModule,
                  BrowserAnimationsModule,
                  BsDatepickerModule.forRoot(),
                  TimepickerModule.forRoot(),
                  ModalModule.forRoot()
                  ],
                  
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

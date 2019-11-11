import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ModalModule, BsDatepickerModule, TimepickerModule  } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatListModule, MatTableModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  ReactiveFormsModule,
                  BrowserAnimationsModule,
                  BsDatepickerModule.forRoot(),
                  TimepickerModule.forRoot(),
                  ModalModule.forRoot(),
                  MatListModule,
                  MatIconModule, 
                  MatButtonModule,
                  MatTableModule
                  ],
                  
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

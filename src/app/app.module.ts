import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDeleteComponent } from './department/show-delete/show-delete.component';
import { AddEdditComponent } from './department/add-eddit/add-eddit.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEditComponent } from './employee/add-edit/add-edit.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDeleteComponent,
    AddEdditComponent,
    EmployeeComponent,
    AddEditComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

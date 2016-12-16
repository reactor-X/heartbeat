import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginForm }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule , HttpModule,FormsModule,ReactiveFormsModule],
  declarations: [ LoginForm ],
  bootstrap:    [ LoginForm ]
})
export class AppModule {
  
}
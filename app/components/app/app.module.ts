import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HostInfoComponent }  from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule , HttpModule],
  declarations: [ HostInfoComponent ],
  bootstrap:    [ HostInfoComponent ]
})
export class AppModule {

}
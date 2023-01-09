import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai4Component } from './bai4/bai4.component';

const routes: Routes = [
  { path: "bai2", component: GreetComponent },
  { path: "bai3", component: Bai2Component, },
  { path: "bai4", component: Bai4Component, }]

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    Bai2Component,
    Bai4Component
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

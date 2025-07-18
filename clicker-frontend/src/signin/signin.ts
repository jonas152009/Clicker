import { BuiltinType } from '@angular/compiler';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet, Routes } from '@angular/router';
import {RouterModule} from '@angular/router';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'signin-root, signin-reactive-favorite-color',
  imports: [RouterOutlet, RouterModule,ReactiveFormsModule],
  templateUrl: './signin.html',
  
})
export class Signin{
     username =" "
     userNameControl = new FormControl('ffff');
doSaveEvent() {
   this.username = this.userNameControl.value ?? "";
   
}
  


}
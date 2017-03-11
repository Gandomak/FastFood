import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";


import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

@Component({
  selector: "my-app",
 
  templateUrl:"pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
// email = "nativescriptrocks@telerik.com";
userName:string;
password:string;
  
 
constructor(private router: Router, private page: Page) {
  
}
ngOnInit() {
  this.page.actionBarHidden = true;
  
}

 submit() {
 
    this.login();
 }
 
login() {
  
   this.router.navigate(["/list"])
  }
 
    
 

}
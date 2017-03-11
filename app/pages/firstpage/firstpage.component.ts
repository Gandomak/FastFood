import { Component, ChangeDetectionStrategy,OnInit} from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";

class Country {
    constructor(public name: string ,public imageSource: string) { }
}


    let europianCountries= ["نوع", "عکس", "دسته بندی", "قیمت", "توضیحات" ];
    let imageSources=["res://foodkind","res://foodimage","res://foodcategiry","res://price","res://discription"]
@Component({
    moduleId: module.id,
    templateUrl: "./firstpage.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls:[ "../../css/core.light.css","./firstpage.component.css","./firstpage.css"]
})
export class FirstPageComponent implements OnInit {
    public countries: Array<Country>;

    constructor(private router: Router,private page: Page) {
        this.countries = [];

        for (let i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i],imageSources[i]));
        }
    }

ngOnInit() {
 
  this.page.backgroundImage = "res://bg";
}

 submit() {
 
    this.login();
 }
 
login() {
   this.router.navigate(["/login"])
      
    }


    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }
     startBackgroundAnimation(background) {
    background.animate({
      scale: { x: 1.0, y: 1.0 },
      duration: 5000
    });
  }
  startSecondBackgroundAnimation(secondbackground) {
    secondbackground.animate({
      scale: { x: 0.5, y: 0.5 },
      duration: 5000
    });
  }

}
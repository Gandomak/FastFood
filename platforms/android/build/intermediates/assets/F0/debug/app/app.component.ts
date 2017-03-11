import { Component, ChangeDetectionStrategy,OnInit} from "@angular/core";
import { Page } from "ui/page";

class Country {
    constructor(public name: string ,public imageSource: string) { }
}

/*let europianCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
    "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
    "Slovenia", "Spain", "Sweden", "United Kingdom"];*/
    let europianCountries= ["نوع", "عکس", "دسته بندی", "قیمت", "توضیحات" ];
    let imageSources=["res://foodkind","res://foodimage","res://foodcategiry","res://price","res://discription"]
@Component({
    moduleId: module.id,
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls:[ "./css/core.light.css","./app.css"]
})
export class AppComponent implements OnInit {
    public countries: Array<Country>;

    constructor(private page: Page) {
        this.countries = [];

        for (let i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i],imageSources[i]));
        }
    }
ngOnInit() {
  
}

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }
     startBackgroundAnimation(background) {
    background.animate({
      scale: { x: 1.0, y: 1.0 },
      duration: 10000
    });
  }
}
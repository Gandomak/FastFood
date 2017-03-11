import { Component, ElementRef, OnInit, ViewChild ,ChangeDetectionStrategy} from "@angular/core";

class Fastfood {
    constructor(public name: string ) { }
}


    let categories= ["نوع", "عکس", "دسته بندی", "قیمت", "توضیحات" ];

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
   changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  
})
export class ListComponent implements OnInit {
 
 public fastfoods: Array<Fastfood>;

    constructor() {
        this.fastfoods = [];

        for (let i = 0; i < categories.length; i++) {
            this.fastfoods.push(new Fastfood(categories[i]));
        }
    }
ngOnInit() {
  
}

}
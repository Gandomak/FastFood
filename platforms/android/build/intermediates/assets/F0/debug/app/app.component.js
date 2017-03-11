"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var Country = (function () {
    function Country(name, imageSource) {
        this.name = name;
        this.imageSource = imageSource;
    }
    return Country;
}());
/*let europianCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
    "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
    "Slovenia", "Spain", "Sweden", "United Kingdom"];*/
var europianCountries = ["نوع", "عکس", "دسته بندی", "قیمت", "توضیحات"];
var imageSources = ["res://foodkind", "res://foodimage", "res://foodcategiry", "res://price", "res://discription"];
var AppComponent = (function () {
    function AppComponent(page) {
        this.page = page;
        this.countries = [];
        for (var i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i], imageSources[i]));
        }
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
    };
    AppComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "./app.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        styleUrls: ["./css/core.light.css", "./app.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUN6RSxnQ0FBK0I7QUFFL0I7SUFDSSxpQkFBbUIsSUFBWSxFQUFTLFdBQW1CO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUFJLENBQUM7SUFDcEUsY0FBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRUQ7Ozt1REFHdUQ7QUFDbkQsSUFBSSxpQkFBaUIsR0FBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUUsQ0FBQztBQUN2RSxJQUFJLFlBQVksR0FBQyxDQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLG9CQUFvQixFQUFDLGFBQWEsRUFBQyxtQkFBbUIsQ0FBQyxDQUFBO0FBT2hILElBQWEsWUFBWTtJQUdyQixzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLENBQUM7SUFDTCxDQUFDO0lBQ0wsK0JBQVEsR0FBUjtJQUVBLENBQUM7SUFFVSxnQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDQSwrQ0FBd0IsR0FBeEIsVUFBeUIsVUFBVTtRQUNwQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFNBQVMsRUFBQyxDQUFFLHNCQUFzQixFQUFDLFdBQVcsQ0FBQztLQUNsRCxDQUFDO3FDQUk0QixXQUFJO0dBSHJCLFlBQVksQ0F1QnhCO0FBdkJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuY2xhc3MgQ291bnRyeSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZyAscHVibGljIGltYWdlU291cmNlOiBzdHJpbmcpIHsgfVxufVxuXG4vKmxldCBldXJvcGlhbkNvdW50cmllcyA9IFtcIkF1c3RyaWFcIiwgXCJCZWxnaXVtXCIsIFwiQnVsZ2FyaWFcIiwgXCJDcm9hdGlhXCIsIFwiQ3lwcnVzXCIsIFwiQ3plY2ggUmVwdWJsaWNcIixcbiAgICBcIkRlbm1hcmtcIiwgXCJFc3RvbmlhXCIsIFwiRmlubGFuZFwiLCBcIkZyYW5jZVwiLCBcIkdlcm1hbnlcIiwgXCJHcmVlY2VcIiwgXCJIdW5nYXJ5XCIsIFwiSXJlbGFuZFwiLCBcIkl0YWx5XCIsXG4gICAgXCJMYXR2aWFcIiwgXCJMaXRodWFuaWFcIiwgXCJMdXhlbWJvdXJnXCIsIFwiTWFsdGFcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIlBvbGFuZFwiLCBcIlBvcnR1Z2FsXCIsIFwiUm9tYW5pYVwiLCBcIlNsb3Zha2lhXCIsXG4gICAgXCJTbG92ZW5pYVwiLCBcIlNwYWluXCIsIFwiU3dlZGVuXCIsIFwiVW5pdGVkIEtpbmdkb21cIl07Ki9cbiAgICBsZXQgZXVyb3BpYW5Db3VudHJpZXM9IFtcItmG2YjYuVwiLCBcIti52qnYs1wiLCBcItiv2LPYqtmHINio2YbYr9uMXCIsIFwi2YLbjNmF2KpcIiwgXCLYqtmI2LbbjNit2KfYqlwiIF07XG4gICAgbGV0IGltYWdlU291cmNlcz1bXCJyZXM6Ly9mb29ka2luZFwiLFwicmVzOi8vZm9vZGltYWdlXCIsXCJyZXM6Ly9mb29kY2F0ZWdpcnlcIixcInJlczovL3ByaWNlXCIsXCJyZXM6Ly9kaXNjcmlwdGlvblwiXVxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHN0eWxlVXJsczpbIFwiLi9jc3MvY29yZS5saWdodC5jc3NcIixcIi4vYXBwLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBjb3VudHJpZXM6IEFycmF5PENvdW50cnk+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldXJvcGlhbkNvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMucHVzaChuZXcgQ291bnRyeShldXJvcGlhbkNvdW50cmllc1tpXSxpbWFnZVNvdXJjZXNbaV0pKTtcbiAgICAgICAgfVxuICAgIH1cbm5nT25Jbml0KCkge1xuICBcbn1cblxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCk7XG4gICAgfVxuICAgICBzdGFydEJhY2tncm91bmRBbmltYXRpb24oYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQuYW5pbWF0ZSh7XG4gICAgICBzY2FsZTogeyB4OiAxLjAsIHk6IDEuMCB9LFxuICAgICAgZHVyYXRpb246IDEwMDAwXG4gICAgfSk7XG4gIH1cbn0iXX0=
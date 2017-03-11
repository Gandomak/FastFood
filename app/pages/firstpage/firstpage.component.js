"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var Country = (function () {
    function Country(name, imageSource) {
        this.name = name;
        this.imageSource = imageSource;
    }
    return Country;
}());
var europianCountries = ["نوع", "عکس", "دسته بندی", "قیمت", "توضیحات"];
var imageSources = ["res://foodkind", "res://foodimage", "res://foodcategiry", "res://price", "res://discription"];
var FirstPageComponent = (function () {
    function FirstPageComponent(router, page) {
        this.router = router;
        this.page = page;
        this.countries = [];
        for (var i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i], imageSources[i]));
        }
    }
    FirstPageComponent.prototype.ngOnInit = function () {
        this.page.backgroundImage = "res://bg";
    };
    FirstPageComponent.prototype.submit = function () {
        this.login();
    };
    FirstPageComponent.prototype.login = function () {
        this.router.navigate(["/login"]);
    };
    FirstPageComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
    };
    FirstPageComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 5000
        });
    };
    FirstPageComponent.prototype.startSecondBackgroundAnimation = function (secondbackground) {
        secondbackground.animate({
            scale: { x: 0.5, y: 0.5 },
            duration: 5000
        });
    };
    return FirstPageComponent;
}());
FirstPageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "./firstpage.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        styleUrls: ["../../css/core.light.css", "./firstpage.component.css", "./firstpage.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], FirstPageComponent);
exports.FirstPageComponent = FirstPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RwYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcnN0cGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUN6RSxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBRXpDO0lBQ0ksaUJBQW1CLElBQVksRUFBUyxXQUFtQjtRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFBSSxDQUFDO0lBQ3BFLGNBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUdHLElBQUksaUJBQWlCLEdBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFFLENBQUM7QUFDdkUsSUFBSSxZQUFZLEdBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxvQkFBb0IsRUFBQyxhQUFhLEVBQUMsbUJBQW1CLENBQUMsQ0FBQTtBQU9oSCxJQUFhLGtCQUFrQjtJQUczQiw0QkFBb0IsTUFBYyxFQUFTLElBQVU7UUFBakMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLENBQUM7SUFDTCxDQUFDO0lBRUwscUNBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0lBRUEsbUNBQU0sR0FBTjtRQUVHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUYsa0NBQUssR0FBTDtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUUvQixDQUFDO0lBR00sc0NBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0EscURBQXdCLEdBQXhCLFVBQXlCLFVBQVU7UUFDcEMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQixLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsMkRBQThCLEdBQTlCLFVBQStCLGdCQUFnQjtRQUM3QyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7WUFDdkIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVILHlCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDWSxrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFNBQVMsRUFBQyxDQUFFLDBCQUEwQixFQUFDLDJCQUEyQixFQUFDLGlCQUFpQixDQUFDO0tBQ3hGLENBQUM7cUNBSThCLGVBQU0sRUFBZSxXQUFJO0dBSDVDLGtCQUFrQixDQTJDOUI7QUEzQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuY2xhc3MgQ291bnRyeSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZyAscHVibGljIGltYWdlU291cmNlOiBzdHJpbmcpIHsgfVxufVxuXG5cbiAgICBsZXQgZXVyb3BpYW5Db3VudHJpZXM9IFtcItmG2YjYuVwiLCBcIti52qnYs1wiLCBcItiv2LPYqtmHINio2YbYr9uMXCIsIFwi2YLbjNmF2KpcIiwgXCLYqtmI2LbbjNit2KfYqlwiIF07XG4gICAgbGV0IGltYWdlU291cmNlcz1bXCJyZXM6Ly9mb29ka2luZFwiLFwicmVzOi8vZm9vZGltYWdlXCIsXCJyZXM6Ly9mb29kY2F0ZWdpcnlcIixcInJlczovL3ByaWNlXCIsXCJyZXM6Ly9kaXNjcmlwdGlvblwiXVxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZpcnN0cGFnZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHN0eWxlVXJsczpbIFwiLi4vLi4vY3NzL2NvcmUubGlnaHQuY3NzXCIsXCIuL2ZpcnN0cGFnZS5jb21wb25lbnQuY3NzXCIsXCIuL2ZpcnN0cGFnZS5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRmlyc3RQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgY291bnRyaWVzOiBBcnJheTxDb3VudHJ5PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldXJvcGlhbkNvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMucHVzaChuZXcgQ291bnRyeShldXJvcGlhbkNvdW50cmllc1tpXSxpbWFnZVNvdXJjZXNbaV0pKTtcbiAgICAgICAgfVxuICAgIH1cblxubmdPbkluaXQoKSB7XG4gXG4gIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnXCI7XG59XG5cbiBzdWJtaXQoKSB7XG4gXG4gICAgdGhpcy5sb2dpbigpO1xuIH1cbiBcbmxvZ2luKCkge1xuICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKVxuICAgICAgXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXgpO1xuICAgIH1cbiAgICAgc3RhcnRCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kLmFuaW1hdGUoe1xuICAgICAgc2NhbGU6IHsgeDogMS4wLCB5OiAxLjAgfSxcbiAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgfSk7XG4gIH1cbiAgc3RhcnRTZWNvbmRCYWNrZ3JvdW5kQW5pbWF0aW9uKHNlY29uZGJhY2tncm91bmQpIHtcbiAgICBzZWNvbmRiYWNrZ3JvdW5kLmFuaW1hdGUoe1xuICAgICAgc2NhbGU6IHsgeDogMC41LCB5OiAwLjUgfSxcbiAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgfSk7XG4gIH1cblxufSJdfQ==
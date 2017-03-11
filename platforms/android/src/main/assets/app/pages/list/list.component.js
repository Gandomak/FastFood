"use strict";
var core_1 = require("@angular/core");
var Fastfood = (function () {
    function Fastfood(name) {
        this.name = name;
    }
    return Fastfood;
}());
var categories = ["نوع", "عکس", "دسته بندی", "قیمت", "توضیحات"];
var ListComponent = (function () {
    function ListComponent() {
        this.fastfoods = [];
        for (var i = 0; i < categories.length; i++) {
            this.fastfoods.push(new Fastfood(categories[i]));
        }
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
    }),
    __metadata("design:paramtypes", [])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWlHO0FBRWpHO0lBQ0ksa0JBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUssQ0FBQztJQUN6QyxlQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFHRyxJQUFJLFVBQVUsR0FBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUUsQ0FBQztBQVNwRSxJQUFhLGFBQWE7SUFJdEI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVwQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDTCxDQUFDO0lBQ0wsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxvQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNsQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtRQUNoRCxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztLQUVqRSxDQUFDOztHQUNXLGFBQWEsQ0FlekI7QUFmWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgLENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5jbGFzcyBGYXN0Zm9vZCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZyApIHsgfVxufVxuXG5cbiAgICBsZXQgY2F0ZWdvcmllcz0gW1wi2YbZiNi5XCIsIFwi2LnaqdizXCIsIFwi2K/Ys9iq2Ycg2KjZhtiv24xcIiwgXCLZgtuM2YXYqlwiLCBcItiq2YjYttuM2K3Yp9iqXCIgXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXSxcbiAgXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuIFxuIHB1YmxpYyBmYXN0Zm9vZHM6IEFycmF5PEZhc3Rmb29kPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZhc3Rmb29kcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5mYXN0Zm9vZHMucHVzaChuZXcgRmFzdGZvb2QoY2F0ZWdvcmllc1tpXSkpO1xuICAgICAgICB9XG4gICAgfVxubmdPbkluaXQoKSB7XG4gIFxufVxuXG59Il19
import { Component } from "@angular/core"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  cols = 1

  onColumnsCountChange(colsNumb: number) {
    this.cols = colsNumb
  }
}

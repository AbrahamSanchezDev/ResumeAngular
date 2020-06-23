import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name = "Abraham Sanchez Fonseca";
  constructor(private translate: TranslateService) {
    this.translate.addLangs(["en", "es"]);
    this.translate.setDefaultLang("en");
  }

  spanish(): void {
    this.translate.use("es");
  }
  english(): void {
    this.translate.use("en");
  }
}

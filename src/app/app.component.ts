import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name = "Abraham Sanchez Fonseca";
  currentLanguage: string;
  constructor(public translate: TranslateService) {
    this.translate.addLangs(["en", "es"]);
    this.translate.setDefaultLang("en");
    this.currentLanguage = "en";
  }
  //Set language to spanish
  spanish(): void {
    this.translate.use("es");
    this.currentLanguage = "es";
  }
  //Set language to english
  english(): void {
    this.translate.use("en");
    this.currentLanguage = "en";
  }
}

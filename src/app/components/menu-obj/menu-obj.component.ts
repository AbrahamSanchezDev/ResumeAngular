import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Menu } from "src/app/model/menu/Menu";
import { MatMenuTrigger } from "@angular/material/menu";
import { MenuData } from "src/app/model/menu/MenuData";

@Component({
  selector: "app-menu-obj",
  templateUrl: "./menu-obj.component.html",
  styleUrls: ["./menu-obj.component.css"],
})
export class MenuObjComponent implements OnInit {
  constructor() {}
  @Input() menu: Menu;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

  ngOnInit(): void {}

  //Close the menu
  closeMenu(): void {
    this.menuTrigger.closeMenu();
  }
  //Call the data callback
  callOnMenu(data: MenuData) {
    this.closeMenu();
    this.callback.emit(data);
  }
}

import {
  Component,
  OnInit,
  ViewChild,
  Input,
  EventEmitter,
  Output,
} from "@angular/core";
import { ImgDataModule } from "src/app/model/ImgData/img-data.module";

@Component({
  selector: "app-images-grid-display",
  templateUrl: "./images-grid-display.component.html",
  styleUrls: ["./images-grid-display.component.css"],
})
export class ImagesGridDisplayComponent implements OnInit {
  @Output() onSelected: EventEmitter<any> = new EventEmitter();

  defaultSrc: string = "";
  @ViewChild("containerObj") container;

  @Input() curImagesData: ImgDataModule[] = [
    {
      css: "preset animal_1",
      src: "",
      id: 0,
    },
    {
      css: "preset animal_3",
      src: "",
      id: 1,
    },
  ];

  constructor() {}

  ngOnInit() {}

  //controls the visibility of the given component
  ShowComponent(img: HTMLImageElement, show: boolean): void {
    if (show) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }
  //Call the event that it was selected
  onSelect(img: ImgDataModule): void {
    this.onSelected.emit(img);
  }
  //Set the grid width and height this will control how the images are displayed
  setSize(x: number, y: number): void {
    document.documentElement.style.setProperty("--gridX", x.toString() + "px");
    document.documentElement.style.setProperty("--gridY", y.toString() + "px");
  }

  //Returns the img src
  getDisplay(img: ImgDataModule): string {
    return img.src;
  }
  //Returns the img css
  getCss(img: ImgDataModule): string {
    return img.css;
  }
  //Returns the Images data
  getCurImagesData(): ImgDataModule[] {
    return this.curImagesData;
  }
}

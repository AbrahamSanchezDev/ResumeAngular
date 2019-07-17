import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { ImgDataModule } from 'src/app/models/ImgData/img-data.module';


@Component({
  selector: 'app-images-grid-display',
  templateUrl: './images-grid-display.component.html',
  styleUrls: ['./images-grid-display.component.css']
})
export class ImagesGridDisplayComponent implements OnInit {
  @Output() onSelected: EventEmitter<any> = new EventEmitter();

  curImages: HTMLImageElement[] = [];
  defaultSrc: string = "";
  @ViewChild("containerObj", { static: false }) container;

  @Input() curImagesData: ImgDataModule[] = [
    {
      css: "preset animal_1",
      src: "",
      id: 0
    },
    {
      css: "preset animal_3",
      src: "",
      id: 1
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  //shows or hides all images on the grid
  ShowCurImages(show: boolean) {
    this.curImages.forEach((img) => {
      this.ShowComponent(img, show);
    })
  }

  //Set the src of the object to default
  SetSrcToDefault(index: number) {
    this.curImages[index].src = this.defaultSrc;
  }
  //controls the visibility of the given component
  ShowComponent(img: HTMLImageElement, show: boolean) {
    if (show) {
      img.style.display = "block";
    }
    else {
      img.style.display = "none";
    }
  }

  //Sets the sre to the images at the given index
  SetSrcTo(index: number, src: string) {
    this.curImages[index].src = src;
  }

  onSelect(img: ImgDataModule) {
    this.onSelected.emit(img);
  }

  getDisplay(img: ImgDataModule) {
    return img.src;
  }
  getCss(img: ImgDataModule) {
    return img.css;
  }
}

import { Injectable } from "@angular/core";
import { JsonLoaderService } from "../json-loader.service";
import { ExpObjModule } from "src/app/model/exp-obj/exp-obj.module";
import { ListObjModule } from "src/app/model/list-obj/list-obj.module";
import { ContactMediaModule } from "src/app/model/contact-media/contact-media.module";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class ResumeDataService {
  private allExpObjects: ExpObjModule[];
  allExpNames: string[] = ["expObj_1", "expObj_2", "expObj_3"];

  private enExpObjects: ExpObjModule[] = [];
  private esExpObjects: ExpObjModule[] = [];
  private skills: ListObjModule[] = [];
  private currentLang: string = "en";

  constructor(
    private jsonLoader: JsonLoaderService,
    private translate: TranslateService
  ) {
    this.translate.onLangChange.subscribe((lang: LangChangeEvent) => {
      this.currentLang = lang.lang;
      this.loadExpInCurrentLanguage();
    });
  }
  //Skills by list of objects
  skillsEn: ListObjModule[] = [
    {
      title: "General:",
      list: [
        "C#",
        "Unity 3d",
        "Steam SDK  <br> (Steam Workshop , etc)",
        "Game Development in general",
        "Basics knowledge in some <br> productions pipelines for game development",
        "HTML,CSS,JavaScript <br> Angular / Angular Jasmine(Auto Testing) ",
      ],
    },
    {
      title: "Programing in unity:",
      list: [
        "Game-play Features",
        "Modding Support",
        "Multi Language Support",
        "Flexible Ui build at runtime",
      ],
    },
    {
      title: "Unity Editor Tools for:",
      list: [
        "Speed up workflow",
        "Manage data",
        "Handle existing content",
        "Adding new content",
        "Multi Language editor tools",
        "Json creation and editing",
        "Automatization tools for level design",
        "Random generated buildings",
        "Modding support Tools",
      ],
    },
    {
      title: "Game Development Pipelines:",
      list: [
        "3d modeling <br> (Blender, Maya, Zbrush)",
        "Texturing <br> (Substance painter , Photoshop, Gimp)",
        "Rigging and Animation<br>(Blender)",
      ],
    },
  ];
  //Skills by list of objects
  skillsEs: ListObjModule[] = [
    {
      title: "General:",
      list: [
        "C#",
        "Unity 3d",
        "Steam SDK  <br> (Steam Workshop , etc)",
        "Game Development en general",
        "Conocimientos básicos en algunas líneas <br>de producción para el desarrollo de juegos",
        "HTML,CSS,JavaScript <br> Angular / Angular Jasmine(Auto Testing) ",
      ],
    },
    {
      title: "Programando en unity:",
      list: [
        "Game-play Features",
        "Soporte para Modding",
        "Soporte multi lenguaje",
        "Ui flexible de construcción <br> al inicio de ejecución",
      ],
    },
    {
      title: "Herramientas de Editor en Unity para:",
      list: [
        "Acelerar el flujo de trabajo",
        "Administrar datos",
        "Manejar contenido existente",
        "Agregar nuevo contenido",
        "Herramientas del editor de idiomas múltiples",
        "Creación y edición de Json",
        "Herramientas de automatización para diseño de niveles",
        "Creación de Edificios al azar",
        "Herramientas de soporte de Modding",
      ],
    },
    {
      title: "Game Development Pipelines:",
      list: [
        "3d modeling <br> (Blender, Maya, Zbrush)",
        "Texturing <br> (Substance painter , Photoshop, Gimp)",
        "Rigging and Animation<br>(Blender)",
      ],
    },
  ];
  //Data for the media images with links
  contactMedia: ContactMediaModule[] = [
    {
      link: "https://github.com/holykiller",
      src: "assets/svg/github.svg",
      altText: "Github",
    },
    {
      link: "https://www.linkedin.com/in/abraham-sanchez-374236102/",
      src: "assets/img/linkedin.png",
      altText: "LinkedIn",
    },
    {
      link: "https://connect.unity.com/u/abraham-sanchez",
      src: "assets/img/unity.jpg",
      altText: "Unity",
    },
    {
      link: "https://www.indiedb.com/games/mobsworlds",
      src: "https://media.indiedb.com/images/global/indiedb.png",
      altText: "IndieDb",
    },
    {
      link: "https://www.facebook.com/MobsWorlds/",
      src: "assets/img/facebook.png",
      altText: "Facebook",
    },
    {
      link: "https://twitter.com/WorldsDev",
      src: "assets/img/twitter.png",
      altText: "Twitter",
    },
    {
      link: "https://store.steampowered.com/app/826930/The_Capture_Worlds/",
      src: "assets/img/steam.png",
      altText: "Steam",
    },
    {
      link: "https://www.youtube.com/channel/UCCS0uX_JDG_3OBPt2jYQsfw",
      src: "assets/img/youtube.png",
      altText: "YouTube",
    },
  ];

  //Get the Skills
  getSkills(): ListObjModule[] {
    return this.skills;
  }
  //Get Experience
  getExperience() {
    if (this.allExpObjects) {
      return this.allExpObjects;
    }
    this.loadExpInCurrentLanguage();
    return this.allExpObjects;
  }
  //Load the current language if not loaded and set the current experiences to the correct language
  private loadExpInCurrentLanguage() {
    switch (this.currentLang) {
      case "es":
        this.loadSpanish();
        break;
      default:
        this.loadEnglish();
        break;
    }
  }
  //Load content in spanish
  private loadSpanish() {
    this.loadExpObjects(".es", this.esExpObjects);
    this.allExpObjects = this.esExpObjects;
    this.skills = this.skillsEs;
  }
  //Load content in english
  private loadEnglish() {
    this.loadExpObjects("", this.enExpObjects);
    this.allExpObjects = this.enExpObjects;
    this.skills = this.skillsEn;
  }
  //Load al the experience objects and add it to the given array
  private loadExpObjects(lang: string, array: ExpObjModule[]) {
    if (array.length > 0) {
      return;
    }
    for (let i = 0; i < this.allExpNames.length; i++) {
      let fileName = `${this.allExpNames[i]}${lang}.json`;
      this.getExpObjWithName(fileName, array);
    }
  }
  //Get the data from the json loader
  private getExpObjWithName(expName: string, array: ExpObjModule[]) {
    this.jsonLoader.getExpObjects(expName).subscribe((data) => {
      array.push(data);
    });
  }
  //Get Media data from local data
  getMediaData(): ContactMediaModule[] {
    return this.contactMedia;
  }
}

import { Component, OnInit } from '@angular/core';
import { ContactMediaModule } from 'src/app/models/contact-media/contact-media.module';

@Component({
  selector: 'app-resume-intro',
  templateUrl: './resume-intro.component.html',
  styleUrls: ['./resume-intro.component.css']
})
export class ResumeIntroComponent implements OnInit {

  contactMedia: ContactMediaModule[] = [
    {
      link: "https://www.linkedin.com/in/abraham-sanchez-374236102/",
      src: "assets/img/linkedin.png",
      altText: "LinkedIn"
    },
    {
      link: "https://connect.unity.com/u/abraham-sanchez",
      src: "assets/img/unity.jpg",
      altText: "Unity"
    },
    {
      link: "https://www.indiedb.com/games/mobsworlds",
      src: "https://media.indiedb.com/images/global/indiedb.png",
      altText: "IndieDb"
    },
    {
      link: "https://www.facebook.com/MobsWorlds/",
      src: "assets/img/facebook.png",
      altText: "Facebook"
    },
    {
      link: "https://twitter.com/WorldsDev",
      src: "assets/img/twitter.png",
      altText: "Twitter"
    },
    {
      link: "https://store.steampowered.com/app/826930/The_Capture_Worlds/",
      src: "assets/img/steam.png",
      altText: "Steam"
    },
    {
      link: "https://www.youtube.com/channel/UCCS0uX_JDG_3OBPt2jYQsfw",
      src: "assets/img/youtube.png",
      altText: "YouTube"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

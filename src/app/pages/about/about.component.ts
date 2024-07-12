import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AboutItem, Section } from './about.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public readonly sections: Record<string, Section> = {
    intro: {
      title: 'Hello,',
      subtitle:
        "We're here to make it easier for you to explore cemeteries, find gravesites, and discover the amazing stories behind them",
    },
    mission: {
      title: 'Our Mission',
      subtitle: "We're all about helping you",
    },
  };

  public readonly missions: AboutItem[] = [
    {
      text: 'Find and navigate to specific gravesites without any hassle',
      imageUrl: '../../../assets/icons/mission-1.png',
    },
    {
      text: 'Learn about the incredible lives and legacies of those who have passed',
      imageUrl: '../../../assets/icons/mission-2.png',
    },
    {
      text: 'Preserve the rich history and stories of cemeteries and their residents',
      imageUrl: '../../../assets/icons/mission-3.png',
    },
  ];

  public readonly offers: AboutItem[] = [
    {
      title: 'Interactive Maps',
      text: 'Our easy-to-use maps make exploring cemeteries a breeze, with clear directions and grave locations',
      imageUrl: '../../../assets/icons/offer-1.png',
    },
    {
      title: 'Grave Search',
      text: 'Quickly locate gravesites with our powerful search tool—filter by name, date, and more',
      imageUrl: '../../../assets/icons/offer-2.png',
    },
    {
      title: 'Historical Insights',
      text: 'Dive into the history of each cemetery and the lives of the people buried there',
      imageUrl: '../../../assets/icons/offer-3.png',
    },
    {
      title: 'Mobile Friendly',
      text: 'Our site works great on your phone, so you can access everything on the go',
      imageUrl: '../../../assets/icons/offer-4.png',
    },
  ];
}

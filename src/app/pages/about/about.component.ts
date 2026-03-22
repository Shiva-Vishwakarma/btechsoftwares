// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-about',
//   standalone: true,
//   imports: [],
//   templateUrl: './about.component.html',
//   styleUrl: './about.component.scss'
// })
// export class AboutComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatButtonModule, HeroSectionComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  teamValues = [
    {
      icon: 'heart',
      title: 'Passion',
      description:
        'We are passionate about creating exceptional digital experiences',
    },
    {
      icon: 'users',
      title: 'Collaboration',
      description:
        'We work closely with our clients to achieve the best results',
    },
    {
      icon: 'light-bulb',
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions',
    },
    {
      icon: 'trophy',
      title: 'Excellence',
      description: 'We strive for perfection in everything we do',
    },
  ];

  milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Started with a vision to transform digital experiences',
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Secured our first enterprise client',
    },
    {
      year: '2018',
      title: 'Team Expansion',
      description: 'Grew to 25+ team members',
    },
    {
      year: '2020',
      title: 'Global Reach',
      description: 'Started serving international clients',
    },
    {
      year: '2022',
      title: 'Innovation Award',
      description: 'Received industry recognition for excellence',
    },
    {
      year: '2024',
      title: '500+ Projects',
      description: 'Successfully delivered over 500 projects',
    },
  ];
}

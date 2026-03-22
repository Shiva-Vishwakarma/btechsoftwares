// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button';
// import { trigger, transition, style, animate } from '@angular/animations';

// @Component({
//   selector: 'app-hero-section',
//   standalone: true,
//   imports: [CommonModule, RouterModule, MatButtonModule],
//   templateUrl: './hero-section.component.html',
//   styleUrls: ['./hero-section.component.scss'],
//   animations: [
//     trigger('fadeInUp', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'translateY(30px)' }),
//         animate(
//           '600ms cubic-bezier(0.4, 0, 0.2, 1)',
//           style({ opacity: 1, transform: 'translateY(0)' }),
//         ),
//       ]),
//     ]),
//   ],
// })
// export class HeroSectionComponent {
//   @Input() title: string = 'Digital Solutions That Drive Growth';
//   @Input() subtitle: string =
//     'Transform your business with cutting-edge technology and innovative design solutions';
//   @Input() buttonText: string = 'Get Started';
//   @Input() buttonLink: string = '/services';
//   @Input() secondaryButtonText: string = 'Learn More';
//   @Input() secondaryButtonLink: string = '/about';
//   @Input() backgroundImage: string = '';
//   @Input() gradient: boolean = true;
// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '600ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
  ],
})
export class HeroSectionComponent {
  @Input() title: string = 'Digital Solutions That Drive Growth';
  @Input() subtitle: string =
    'Transform your business with cutting-edge technology and innovative design solutions';
  @Input() buttonText: string = 'Get Started';
  @Input() buttonLink: string = '/services';
  @Input() secondaryButtonText: string = 'Learn More';
  @Input() secondaryButtonLink: string = '/about';
  @Input() backgroundImage: string = '';
  @Input() gradient: boolean = true;

  // Default background image if none provided
  defaultImage: string =
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80';
}

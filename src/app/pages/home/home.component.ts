// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {

// }

// import {
//   Component,
//   OnInit,
//   AfterViewInit,
//   ElementRef,
//   ViewChild,
// } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import {
//   trigger,
//   transition,
//   style,
//   animate,
//   query,
//   stagger,
// } from '@angular/animations';
// import { Chart } from 'chart.js';

// // Material imports
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
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
//     trigger('staggerAnimation', [
//       transition('* => *', [
//         query(
//           ':enter',
//           [
//             style({ opacity: 0, transform: 'translateY(20px)' }),
//             stagger('100ms', [
//               animate(
//                 '500ms cubic-bezier(0.4, 0, 0.2, 1)',
//                 style({ opacity: 1, transform: 'translateY(0)' }),
//               ),
//             ]),
//           ],
//           { optional: true },
//         ),
//       ]),
//     ]),
//     trigger('scaleIn', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'scale(0.9)' }),
//         animate(
//           '400ms cubic-bezier(0.4, 0, 0.2, 1)',
//           style({ opacity: 1, transform: 'scale(1)' }),
//         ),
//       ]),
//     ]),
//   ],
// })
// export class HomeComponent implements OnInit, AfterViewInit {
//   @ViewChild('statsChart') statsChartRef!: ElementRef;

//   stats = [
//     { value: 0, target: 500, label: 'Projects Completed', suffix: '+' },
//     { value: 0, target: 120, label: 'Happy Clients', suffix: '+' },
//     { value: 0, target: 50, label: 'Team Members', suffix: '' },
//     { value: 0, target: 10, label: 'Years Experience', suffix: '' },
//   ];

//   features = [
//     {
//       icon: 'rocket',
//       title: 'Fast Performance',
//       description:
//         'Lightning fast loading times and optimized performance for better user experience',
//     },
//     {
//       icon: 'shield-check',
//       title: 'Secure Solutions',
//       description:
//         'Enterprise-grade security for all your digital assets and peace of mind',
//     },
//     {
//       icon: 'device-phone-mobile',
//       title: 'Responsive Design',
//       description:
//         'Perfect experience across all devices and screen sizes with fluid layouts',
//     },
//     {
//       icon: 'users',
//       title: 'User-Centric',
//       description:
//         'Design focused on providing the best user experience and engagement',
//     },
//   ];

//   testimonials = [
//     {
//       name: 'Sarah Johnson',
//       position: 'CEO, TechStart',
//       image:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
//       text: 'Amazing team to work with! They delivered beyond our expectations and the results were outstanding. Highly recommended!',
//       rating: 5,
//     },
//     {
//       name: 'Michael Chen',
//       position: 'CTO, InnovateCorp',
//       image:
//         'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
//       text: 'Professional, reliable, and highly skilled. Their technical expertise is truly impressive and they exceeded our expectations.',
//       rating: 5,
//     },
//     {
//       name: 'Emily Rodriguez',
//       position: 'Marketing Director',
//       image:
//         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
//       text: 'The best decision we made was choosing this team. Their creativity and dedication are unmatched in the industry.',
//       rating: 5,
//     },
//   ];

//   private animationStarted = false;

//   ngOnInit() {
//     this.startCounterAnimation();
//   }

//   ngAfterViewInit() {
//     this.initStatsChart();
//   }

//   startCounterAnimation() {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !this.animationStarted) {
//             this.animationStarted = true;
//             this.animateStats();
//             observer.disconnect();
//           }
//         });
//       },
//       { threshold: 0.5 },
//     );

//     const statsSection = document.querySelector('.stats-section');
//     if (statsSection) {
//       observer.observe(statsSection);
//     }
//   }

//   animateStats() {
//     this.stats.forEach((stat) => {
//       let currentValue = 0;
//       const increment = stat.target / 50;
//       const interval = setInterval(() => {
//         currentValue += increment;
//         if (currentValue >= stat.target) {
//           stat.value = stat.target;
//           clearInterval(interval);
//         } else {
//           stat.value = Math.floor(currentValue);
//         }
//       }, 30);
//     });
//   }

//   initStatsChart() {
//     if (this.statsChartRef) {
//       const ctx = this.statsChartRef.nativeElement.getContext('2d');
//       new Chart(ctx, {
//         type: 'line',
//         data: {
//           labels: [
//             'Jan',
//             'Feb',
//             'Mar',
//             'Apr',
//             'May',
//             'Jun',
//             'Jul',
//             'Aug',
//             'Sep',
//             'Oct',
//             'Nov',
//             'Dec',
//           ],
//           datasets: [
//             {
//               label: 'Project Growth',
//               data: [65, 78, 89, 102, 145, 178, 210, 245, 278, 312, 345, 389],
//               borderColor: '#0ea5e9',
//               backgroundColor: 'rgba(14, 165, 233, 0.1)',
//               borderWidth: 3,
//               fill: true,
//               tension: 0.4,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             legend: {
//               display: false,
//             },
//           },
//           scales: {
//             y: {
//               beginAtZero: true,
//               grid: {
//                 color: 'rgba(0, 0, 0, 0.05)',
//               },
//             },
//             x: {
//               grid: {
//                 display: false,
//               },
//             },
//           },
//         },
//       });
//     }
//   }
// }

// import {
//   Component,
//   OnInit,
//   AfterViewInit,
//   ElementRef,
//   ViewChild,
// } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import {
//   trigger,
//   transition,
//   style,
//   animate,
//   query,
//   stagger,
// } from '@angular/animations';
// import { Chart } from 'chart.js';

// // Import shared components
// import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
// import { CtaSectionComponent } from '../../shared/cta-section/cta-section.component';
// import { TestimonialCardComponent } from '../../shared/testimonial-card/testimonial-card.component';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterModule,
//     MatButtonModule,
//     MatCardModule,
//     MatProgressSpinnerModule,
//     HeroSectionComponent,
//     CtaSectionComponent,
//     TestimonialCardComponent,
//   ],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   animations: [
//     trigger('staggerAnimation', [
//       transition('* => *', [
//         query(
//           ':enter',
//           [
//             style({ opacity: 0, transform: 'translateY(20px)' }),
//             stagger('100ms', [
//               animate(
//                 '500ms cubic-bezier(0.4, 0, 0.2, 1)',
//                 style({ opacity: 1, transform: 'translateY(0)' }),
//               ),
//             ]),
//           ],
//           { optional: true },
//         ),
//       ]),
//     ]),
//     trigger('scaleIn', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'scale(0.9)' }),
//         animate(
//           '400ms cubic-bezier(0.4, 0, 0.2, 1)',
//           style({ opacity: 1, transform: 'scale(1)' }),
//         ),
//       ]),
//     ]),
//   ],
// })
// export class HomeComponent implements OnInit, AfterViewInit {
//   @ViewChild('statsChart') statsChartRef!: ElementRef;

//   stats = [
//     { value: 0, target: 500, label: 'Projects Completed', suffix: '+' },
//     { value: 0, target: 120, label: 'Happy Clients', suffix: '+' },
//     { value: 0, target: 50, label: 'Team Members', suffix: '' },
//     { value: 0, target: 10, label: 'Years Experience', suffix: '' },
//   ];

//   features = [
//     {
//       icon: 'rocket',
//       title: 'Fast Performance',
//       description:
//         'Lightning fast loading times and optimized performance for better user experience',
//     },
//     {
//       icon: 'shield-check',
//       title: 'Secure Solutions',
//       description:
//         'Enterprise-grade security for all your digital assets and peace of mind',
//     },
//     {
//       icon: 'device-phone-mobile',
//       title: 'Responsive Design',
//       description:
//         'Perfect experience across all devices and screen sizes with fluid layouts',
//     },
//     {
//       icon: 'users',
//       title: 'User-Centric',
//       description:
//         'Design focused on providing the best user experience and engagement',
//     },
//   ];

//   testimonials = [
//     {
//       name: 'Sarah Johnson',
//       position: 'CEO',
//       company: 'TechStart',
//       image:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
//       text: 'Amazing team to work with! They delivered beyond our expectations and the results were outstanding. Highly recommended!',
//       rating: 5,
//     },
//     {
//       name: 'Michael Chen',
//       position: 'CTO',
//       company: 'InnovateCorp',
//       image:
//         'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
//       text: 'Professional, reliable, and highly skilled. Their technical expertise is truly impressive and they exceeded our expectations.',
//       rating: 5,
//     },
//     {
//       name: 'Emily Rodriguez',
//       position: 'Marketing Director',
//       company: 'Creative Studios',
//       image:
//         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
//       text: 'The best decision we made was choosing this team. Their creativity and dedication are unmatched in the industry.',
//       rating: 5,
//     },
//   ];

//   private animationStarted = false;

//   ngOnInit() {
//     this.startCounterAnimation();
//   }

//   ngAfterViewInit() {
//     this.initStatsChart();
//   }

//   startCounterAnimation() {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !this.animationStarted) {
//             this.animationStarted = true;
//             this.animateStats();
//             observer.disconnect();
//           }
//         });
//       },
//       { threshold: 0.5 },
//     );

//     const statsSection = document.querySelector('.stats-section');
//     if (statsSection) {
//       observer.observe(statsSection);
//     }
//   }

//   animateStats() {
//     this.stats.forEach((stat) => {
//       let currentValue = 0;
//       const increment = stat.target / 50;
//       const interval = setInterval(() => {
//         currentValue += increment;
//         if (currentValue >= stat.target) {
//           stat.value = stat.target;
//           clearInterval(interval);
//         } else {
//           stat.value = Math.floor(currentValue);
//         }
//       }, 30);
//     });
//   }

//   initStatsChart() {
//     if (this.statsChartRef) {
//       const ctx = this.statsChartRef.nativeElement.getContext('2d');
//       new Chart(ctx, {
//         type: 'line',
//         data: {
//           labels: [
//             'Jan',
//             'Feb',
//             'Mar',
//             'Apr',
//             'May',
//             'Jun',
//             'Jul',
//             'Aug',
//             'Sep',
//             'Oct',
//             'Nov',
//             'Dec',
//           ],
//           datasets: [
//             {
//               label: 'Project Growth',
//               data: [65, 78, 89, 102, 145, 178, 210, 245, 278, 312, 345, 389],
//               borderColor: '#0ea5e9',
//               backgroundColor: 'rgba(14, 165, 233, 0.1)',
//               borderWidth: 3,
//               fill: true,
//               tension: 0.4,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             legend: {
//               display: false,
//             },
//           },
//           scales: {
//             y: {
//               beginAtZero: true,
//               grid: {
//                 color: 'rgba(0, 0, 0, 0.05)',
//               },
//             },
//             x: {
//               grid: {
//                 display: false,
//               },
//             },
//           },
//         },
//       });
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

// Import shared components
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { CtaSectionComponent } from '../../shared/cta-section/cta-section.component';
import { TestimonialCardComponent } from '../../shared/testimonial-card/testimonial-card.component';
import { TestimonialCarouselComponent } from '../../shared/testimonial-carousel/testimonial-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    HeroSectionComponent,
    CtaSectionComponent,
    TestimonialCardComponent,
    TestimonialCarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger('100ms', [
              animate(
                '500ms cubic-bezier(0.4, 0, 0.2, 1)',
                style({ opacity: 1, transform: 'translateY(0)' }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate(
          '400ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'scale(1)' }),
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  stats = [
    { value: 0, target: 500, label: 'Projects Completed', suffix: '+' },
    { value: 0, target: 120, label: 'Happy Clients', suffix: '+' },
    { value: 0, target: 50, label: 'Team Members', suffix: '' },
    { value: 0, target: 10, label: 'Years Experience', suffix: '' },
  ];

  features = [
    {
      icon: 'rocket',
      title: 'Fast Performance',
      description:
        'Lightning fast loading times and optimized performance for better user experience',
    },
    {
      icon: 'shield-check',
      title: 'Secure Solutions',
      description:
        'Enterprise-grade security for all your digital assets and peace of mind',
    },
    {
      icon: 'device-phone-mobile',
      title: 'Responsive Design',
      description:
        'Perfect experience across all devices and screen sizes with fluid layouts',
    },
    {
      icon: 'users',
      title: 'User-Centric',
      description:
        'Design focused on providing the best user experience and engagement',
    },
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
      text: 'Amazing team to work with! They delivered beyond our expectations and the results were outstanding. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      company: 'InnovateCorp',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
      text: 'Professional, reliable, and highly skilled. Their technical expertise is truly impressive and they exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'Creative Studios',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
      text: 'The best decision we made was choosing this team. Their creativity and dedication are unmatched in the industry.',
      rating: 5,
    },
  ];

  private animationStarted = false;

  ngOnInit() {
    this.startCounterAnimation();
  }

  startCounterAnimation() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animationStarted) {
            this.animationStarted = true;
            this.animateStats();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );

    setTimeout(() => {
      const statsSection = document.querySelector('.stats-section');
      if (statsSection) {
        observer.observe(statsSection);
      }
    }, 100);
  }

  animateStats() {
    this.stats.forEach((stat) => {
      let currentValue = 0;
      const increment = stat.target / 50;
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.target) {
          stat.value = stat.target;
          clearInterval(interval);
        } else {
          stat.value = Math.floor(currentValue);
        }
      }, 30);
    });
  }
}

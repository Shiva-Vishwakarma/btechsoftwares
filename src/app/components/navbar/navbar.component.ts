// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })
// export class NavbarComponent {

// }

// import { Component, HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { trigger, transition, style, animate } from '@angular/animations';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss'],
//   animations: [
//     trigger('fadeInOut', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'translateY(-20px)' }),
//         animate(
//           '300ms ease-out',
//           style({ opacity: 1, transform: 'translateY(0)' }),
//         ),
//       ]),
//       transition(':leave', [
//         animate(
//           '300ms ease-in',
//           style({ opacity: 0, transform: 'translateY(-20px)' }),
//         ),
//       ]),
//     ]),
//   ],
// })
// export class NavbarComponent {
//   isMenuOpen = false;
//   isScrolled = false;
//   navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/services', label: 'Services' },
//     { path: '/portfolio', label: 'Portfolio' },
//     { path: '/team', label: 'Team' },
//     { path: '/pricing', label: 'Pricing' },
//     { path: '/blog', label: 'Blog' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   @HostListener('window:scroll')
//   onWindowScroll() {
//     this.isScrolled = window.scrollY > 50;
//   }

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   closeMenu() {
//     this.isMenuOpen = false;
//   }
// }

// import { Component, HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { trigger, transition, style, animate } from '@angular/animations';
// import { MatButtonModule } from '@angular/material/button';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterModule,
//     MatButtonModule,
//     MatMenuModule,
//     MatIconModule,
//   ],
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss'],
//   animations: [
//     trigger('fadeInOut', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'translateY(-20px)' }),
//         animate(
//           '300ms ease-out',
//           style({ opacity: 1, transform: 'translateY(0)' }),
//         ),
//       ]),
//       transition(':leave', [
//         animate(
//           '300ms ease-in',
//           style({ opacity: 0, transform: 'translateY(-20px)' }),
//         ),
//       ]),
//     ]),
//   ],
// })
// export class NavbarComponent {
//   isMenuOpen = false;
//   isScrolled = false;

//   navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/services', label: 'Services' },
//     { path: '/portfolio', label: 'Portfolio' },
//     { path: '/team', label: 'Team' },
//     { path: '/pricing', label: 'Pricing' },
//     { path: '/blog', label: 'Blog' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   @HostListener('window:scroll')
//   onWindowScroll() {
//     this.isScrolled = window.scrollY > 50;
//   }

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   closeMenu() {
//     this.isMenuOpen = false;
//   }
// }

import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateY(-20px)' }),
        ),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;
  logoExists = false;
  logoPath = 'assets/logo-btech.png'; // Path to your logo file
  logoText = 'BTech Softwares';

  navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/team', label: 'Team' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  ngOnInit() {
    this.checkLogoExists();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  checkLogoExists() {
    // Check if logo exists by trying to load it
    const img = new Image();
    img.onload = () => {
      this.logoExists = true;
    };
    img.onerror = () => {
      this.logoExists = false;
    };
    img.src = this.logoPath;
  }
}

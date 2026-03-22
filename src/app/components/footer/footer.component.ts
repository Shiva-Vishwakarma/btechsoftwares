// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-footer',
//   standalone: true,
//   imports: [],
//   templateUrl: './footer.component.html',
//   styleUrl: './footer.component.scss'
// })
// export class FooterComponent {

// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-footer',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.scss'],
// })
// export class FooterComponent {
//   currentYear = new Date().getFullYear();

//   quickLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About Us' },
//     { path: '/services', label: 'Services' },
//     { path: '/portfolio', label: 'Portfolio' },
//     { path: '/blog', label: 'Blog' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   services = [
//     { path: '/services/1', label: 'Web Development' },
//     { path: '/services/2', label: 'Mobile Development' },
//     { path: '/services/3', label: 'UI/UX Design' },
//     { path: '/services/4', label: 'Digital Marketing' },
//   ];

//   socialLinks = [
//     { icon: 'facebook', url: '#', label: 'Facebook' },
//     { icon: 'twitter', url: '#', label: 'Twitter' },
//     { icon: 'linkedin', url: '#', label: 'LinkedIn' },
//     { icon: 'github', url: '#', label: 'GitHub' },
//   ];
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/team', label: 'Team' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ];

  services = [
    { path: '/services/1', label: 'Web Development' },
    { path: '/services/2', label: 'Mobile Development' },
    { path: '/services/3', label: 'UI/UX Design' },
    { path: '/services/4', label: 'Digital Marketing' },
    { path: '/services/5', label: 'Cloud Solutions' },
    { path: '/services/6', label: 'E-commerce Solutions' },
  ];

  contactInfo = {
    address:
      'KH NO-260 KODER, Rajaji Puram Road, Pal Tiraha, Lucknow, Uttar Pradesh 226017',
    email: 'info@btechsoftwares.com',
    phone: '+91 986543210',
    phone2: '+91 9876543210',
  };

  socialLinks = [
    {
      icon: 'facebook',
      url: 'https://facebook.com',
      label: 'Facebook',
      color: '#1877f2',
    },
    {
      icon: 'twitter',
      url: 'https://twitter.com',
      label: 'Twitter',
      color: '#1da1f2',
    },
    {
      icon: 'linkedin',
      url: 'https://linkedin.com',
      label: 'LinkedIn',
      color: '#0077b5',
    },
    {
      icon: 'github',
      url: 'https://github.com',
      label: 'GitHub',
      color: '#333',
    },
    {
      icon: 'instagram',
      url: 'https://instagram.com',
      label: 'Instagram',
      color: '#e4405f',
    },
  ];

  newsletterEmail: string = '';

  subscribeNewsletter() {
    if (this.newsletterEmail) {
      console.log('Subscribed:', this.newsletterEmail);
      // Here you would integrate with your backend
      alert('Thank you for subscribing!');
      this.newsletterEmail = '';
    }
  }
}

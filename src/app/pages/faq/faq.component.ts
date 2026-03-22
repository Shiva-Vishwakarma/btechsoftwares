// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-faq',
//   standalone: true,
//   imports: [],
//   templateUrl: './faq.component.html',
//   styleUrl: './faq.component.scss'
// })
// export class FaqComponent {

// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatExpansionModule } from '@angular/material/expansion';

// @Component({
//   selector: 'app-faq',
//   standalone: true,
//   imports: [CommonModule, MatExpansionModule],
//   templateUrl: './faq.component.html',
//   styleUrls: ['./faq.component.scss'],
// })
// export class FaqComponent {
//   faqCategories = [
//     {
//       name: 'General Questions',
//       icon: 'general',
//       questions: [
//         {
//           question: 'What services do you offer?',
//           answer:
//             'We offer a comprehensive range of digital services including web development, mobile development, UI/UX design, digital marketing, cloud solutions, and e-commerce development. Each service is tailored to meet your specific business needs.',
//         },
//         {
//           question: 'How long does a typical project take?',
//           answer:
//             'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during the consultation phase.',
//         },
//         {
//           question: 'Do you provide ongoing support?',
//           answer:
//             'Yes, we offer various support and maintenance packages to ensure your digital products run smoothly. Our support includes bug fixes, updates, performance monitoring, and technical assistance.',
//         },
//       ],
//     },
//     {
//       name: 'Pricing & Payment',
//       icon: 'pricing',
//       questions: [
//         {
//           question: 'How do you price your services?',
//           answer:
//             'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer packages. Each project is quoted based on requirements, complexity, and timeline. Contact us for a free consultation and quote.',
//         },
//         {
//           question: 'What payment methods do you accept?',
//           answer:
//             'We accept bank transfers, credit cards, and PayPal. Payment terms are typically 50% upfront and 50% upon project completion, though this can be adjusted based on project scope.',
//         },
//         {
//           question: 'Are there any hidden costs?',
//           answer:
//             'No, we believe in complete transparency. All costs are discussed and agreed upon before starting the project. Any additional work outside the scope will be discussed and approved before implementation.',
//         },
//       ],
//     },
//     {
//       name: 'Technical Questions',
//       icon: 'technical',
//       questions: [
//         {
//           question: 'What technologies do you use?',
//           answer:
//             'We use modern technologies including Angular, React, Vue.js for frontend, Node.js, Python, PHP for backend, and various databases like MongoDB, PostgreSQL, MySQL. We always choose the best technology stack for your specific needs.',
//         },
//         {
//           question: 'Will my website be mobile-friendly?',
//           answer:
//             'Absolutely! All our websites and applications are built with responsive design principles, ensuring they look and function perfectly on all devices - desktops, tablets, and mobile phones.',
//         },
//         {
//           question: 'Do you provide SEO optimization?',
//           answer:
//             'Yes, we implement SEO best practices in all our projects, including proper HTML structure, meta tags, site speed optimization, and mobile responsiveness. We also offer dedicated SEO services for improving search rankings.',
//         },
//       ],
//     },
//     {
//       name: 'Process & Collaboration',
//       icon: 'process',
//       questions: [
//         {
//           question: 'How does your development process work?',
//           answer:
//             'Our process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development, 4) Testing & QA, 5) Deployment, and 6) Ongoing Support. We keep you involved throughout the process with regular updates and feedback sessions.',
//         },
//         {
//           question: 'How do you communicate with clients?',
//           answer:
//             'We use various communication tools including email, video calls, Slack, and project management tools like Trello or Jira. We maintain regular communication to ensure transparency and alignment with your goals.',
//         },
//         {
//           question: 'Can I see progress during development?',
//           answer:
//             "Yes, we provide regular progress reports, demos, and access to a development environment where you can see the project evolving. This ensures we're always aligned with your expectations.",
//         },
//       ],
//     },
//   ];
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatButtonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
  ],
})
export class FaqComponent {
  expandedIndex = '';
  searchQuery = '';

  faqCategories = [
    {
      name: 'General Questions',
      icon: 'general',
      questions: [
        {
          question: 'What services do you offer?',
          answer:
            'We offer a comprehensive range of digital services including web development, mobile development, UI/UX design, digital marketing, cloud solutions, and e-commerce development. Each service is tailored to meet your specific business needs.',
        },
        {
          question: 'How long does a typical project take?',
          answer:
            'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during the consultation phase.',
        },
        {
          question: 'Do you provide ongoing support?',
          answer:
            'Yes, we offer various support and maintenance packages to ensure your digital products run smoothly. Our support includes bug fixes, updates, performance monitoring, and technical assistance.',
        },
      ],
    },
    {
      name: 'Pricing & Payment',
      icon: 'pricing',
      questions: [
        {
          question: 'How do you price your services?',
          answer:
            'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer packages. Each project is quoted based on requirements, complexity, and timeline. Contact us for a free consultation and quote.',
        },
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept bank transfers, credit cards, and PayPal. Payment terms are typically 50% upfront and 50% upon project completion, though this can be adjusted based on project scope.',
        },
        {
          question: 'Are there any hidden costs?',
          answer:
            'No, we believe in complete transparency. All costs are discussed and agreed upon before starting the project. Any additional work outside the scope will be discussed and approved before implementation.',
        },
      ],
    },
    {
      name: 'Technical Questions',
      icon: 'technical',
      questions: [
        {
          question: 'What technologies do you use?',
          answer:
            'We use modern technologies including Angular, React, Vue.js for frontend, Node.js, Python, PHP for backend, and various databases like MongoDB, PostgreSQL, MySQL. We always choose the best technology stack for your specific needs.',
        },
        {
          question: 'Will my website be mobile-friendly?',
          answer:
            'Absolutely! All our websites and applications are built with responsive design principles, ensuring they look and function perfectly on all devices - desktops, tablets, and mobile phones.',
        },
        {
          question: 'Do you provide SEO optimization?',
          answer:
            'Yes, we implement SEO best practices in all our projects, including proper HTML structure, meta tags, site speed optimization, and mobile responsiveness. We also offer dedicated SEO services for improving search rankings.',
        },
      ],
    },
    {
      name: 'Process & Collaboration',
      icon: 'process',
      questions: [
        {
          question: 'How does your development process work?',
          answer:
            'Our process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development, 4) Testing & QA, 5) Deployment, and 6) Ongoing Support. We keep you involved throughout the process with regular updates and feedback sessions.',
        },
        {
          question: 'How do you communicate with clients?',
          answer:
            'We use various communication tools including email, video calls, Slack, and project management tools like Trello or Jira. We maintain regular communication to ensure transparency and alignment with your goals.',
        },
        {
          question: 'Can I see progress during development?',
          answer:
            "Yes, we provide regular progress reports, demos, and access to a development environment where you can see the project evolving. This ensures we're always aligned with your expectations.",
        },
      ],
    },
  ];

  scrollToCategory(categoryName: string) {
    const element = document.getElementById('category-' + categoryName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onSearch(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value.toLowerCase();
    // You can implement search filtering logic here
  }
}

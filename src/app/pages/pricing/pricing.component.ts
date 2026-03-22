// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pricing',
//   standalone: true,
//   imports: [],
//   templateUrl: './pricing.component.html',
//   styleUrl: './pricing.component.scss'
// })
// export class PricingComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CtaSectionComponent } from '../../shared/cta-section/cta-section.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    CtaSectionComponent,
  ],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  pricingPlans = [
    {
      name: 'Basic',
      price: 499,
      period: 'one-time',
      description:
        'Perfect for small businesses starting their digital journey',
      features: [
        '5 Pages Website',
        'Mobile Responsive Design',
        'Contact Form',
        'Basic SEO Setup',
        'Social Media Integration',
        '1 Month Support',
      ],
      notIncluded: [
        'E-commerce Functionality',
        'Custom Animations',
        'Advanced SEO',
      ],
      recommended: false,
      buttonText: 'Get Started',
      buttonColor: 'primary',
    },
    {
      name: 'Professional',
      price: 999,
      period: 'one-time',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 10 Pages',
        'Custom Design',
        'CMS Integration',
        'Advanced SEO Optimization',
        'E-commerce Ready',
        '3 Months Support',
        'Performance Optimization',
        'Analytics Integration',
      ],
      notIncluded: [],
      recommended: true,
      buttonText: 'Choose Plan',
      buttonColor: 'accent',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'custom',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited Pages',
        'Custom Development',
        'Scalable Architecture',
        'Advanced Security',
        '24/7 Priority Support',
        'Dedicated Team',
        'Custom Features',
        'Training & Documentation',
      ],
      notIncluded: [],
      recommended: false,
      buttonText: 'Contact Sales',
      buttonColor: 'primary',
    },
  ];

  monthlyPlans = [
    {
      name: 'Starter',
      price: 49,
      period: 'month',
      description: 'Perfect for startups and small businesses',
      features: [
        '1 Project',
        'Basic Analytics',
        'Email Support',
        'Monthly Reports',
        '5 GB Storage',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: 99,
      period: 'month',
      description: 'For growing businesses with increasing needs',
      features: [
        '3 Projects',
        'Advanced Analytics',
        'Priority Support',
        'Weekly Reports',
        '50 GB Storage',
        'API Access',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: 199,
      period: 'month',
      description: 'For established businesses requiring full support',
      features: [
        'Unlimited Projects',
        'Custom Analytics',
        '24/7 Support',
        'Daily Reports',
        '500 GB Storage',
        'API Access',
        'Dedicated Account Manager',
      ],
      recommended: false,
    },
  ];

  selectedPlanType = 'one-time';

  selectPlanType(type: string) {
    this.selectedPlanType = type;
  }
}

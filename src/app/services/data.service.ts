// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service } from '../models/service';
import { Team } from '../models/team';
import { Portfolio } from '../models/portfolio';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description:
        'Modern and responsive web applications using cutting-edge technologies. We build scalable, high-performance websites and web apps that engage users and drive business growth.',
      icon: 'code-bracket',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      features: [
        'React/Angular/Vue.js',
        'Node.js/Python',
        'MongoDB/PostgreSQL',
        'RESTful & GraphQL APIs',
        'Progressive Web Apps',
        'Performance Optimization',
      ],
      price: 'Starting at $999',
    },
    {
      id: 2,
      title: 'Mobile Development',
      description:
        'Cross-platform mobile apps that deliver native-like performance. We create beautiful, intuitive mobile experiences for iOS and Android platforms.',
      icon: 'device-phone-mobile',
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        'React Native',
        'Flutter',
        'Native iOS/Android',
        'App Store & Play Store Deployment',
        'Push Notifications',
        'Offline Sync',
      ],
      price: 'Starting at $1499',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description:
        'User-centered design that enhances user experience and drives engagement. We create beautiful, intuitive interfaces that users love.',
      icon: 'paint-brush',
      image:
        'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Interaction Design',
        'Visual Design',
        'Usability Testing',
        'Design Systems',
      ],
      price: 'Starting at $799',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description:
        'Data-driven marketing strategies that increase visibility and drive conversions. We help you reach your target audience effectively.',
      icon: 'chart-bar',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Strategy',
        'Email Marketing',
        'PPC Advertising',
        'Analytics & Reporting',
      ],
      price: 'Starting at $599/month',
    },
    {
      id: 5,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and DevOps services. We help you leverage the power of cloud computing for your business.',
      icon: 'cloud',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      features: [
        'AWS/Azure/GCP',
        'DevOps & CI/CD',
        'Containerization',
        'Serverless Architecture',
        'Cloud Migration',
        '24/7 Monitoring',
      ],
      price: 'Starting at $1999',
    },
    {
      id: 6,
      title: 'E-commerce Solutions',
      description:
        'Complete e-commerce platforms that drive sales and provide seamless shopping experiences.',
      icon: 'shopping-cart',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      features: [
        'Custom E-commerce',
        'Payment Gateway Integration',
        'Inventory Management',
        'Shopping Cart',
        'Order Tracking',
        'Customer Accounts',
      ],
      price: 'Starting at $1499',
    },
  ];

  private team: Team[] = [
    {
      id: 1,
      name: 'Kaushik Sahu',
      position: 'Co Founder',
      bio: 'Visionary leader with 12+ years of experience in tech industry. John founded the company with a mission to deliver exceptional digital solutions that transform businesses.',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/',
        twitter: 'https://twitter.com/',
        github: 'https://github.com/',
      },
      skills: ['Leadership', 'Strategy', 'Innovation', 'Business Development'],
    },
    {
      id: 2,
      name: 'Rahul Kannaujiya',
      position: 'Co Founder',
      bio: 'Technical architect and AI specialist with expertise in scalable systems. Sarah leads our engineering team to deliver cutting-edge solutions.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/',
        twitter: 'https://twitter.com/',
        github: 'https://github.com/',
      },
      skills: [
        'Cloud Architecture',
        'AI/ML',
        'System Design',
        'Team Leadership',
      ],
    },
    {
      id: 3,
      name: 'Anant Tiwari',
      position: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating elegant code solutions. Michael specializes in modern web technologies and best practices.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/',
        github: 'https://github.com/',
      },
      skills: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
    },
    {
      id: 4,
      name: 'Dona Sarkar',
      position: 'UI/UX Designer',
      bio: 'Creative designer focused on user-centered design and beautiful interfaces. Emily creates experiences that users love and remember.',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/',
        twitter: 'https://twitter.com/',
      },
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    },
    {
      id: 5,
      name: 'David Kim',
      position: 'Marketing Director',
      bio: 'Digital marketing strategist with expertise in growth hacking. David drives our marketing efforts and client acquisition strategies.',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/davidkim',
        twitter: 'https://twitter.com/davidkim',
      },
      skills: ['SEO', 'Content Strategy', 'Analytics', 'Growth Hacking'],
    },
    {
      id: 6,
      name: 'Lisa Wang',
      position: 'Project Manager',
      bio: 'Agile expert ensuring projects are delivered on time and within budget. Lisa keeps our teams organized and clients happy.',
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/lisawang',
      },
      skills: ['Agile', 'Scrum', 'Risk Management', 'Client Relations'],
    },
  ];

  private portfolio: Portfolio[] = [
    {
      id: 7,
      title: 'BPharmaStore – Online Pharmacy Platform',
      category: 'Web Development',
      description:
        'A comprehensive online pharmacy platform offering a wide range of medicines, healthcare products, and pharmacy-related services. The platform includes product browsing, secure checkout, user account management, and responsive design for seamless shopping experience.',
      image: 'assets/portfolio/pharma-1.png',
      client: 'BPharmaStore',
      technologies: [
        'Angular',
        'TypeScript',
        'Node.js',
        'Express',
        'MongoDB',
        'REST API',
        'Bootstrap',
      ],
      liveUrl: 'https://www.bpharmastore.com/',
      githubUrl: '', // Add if available
      images: [
        'assets/portfolio/pharma-1.png',
        'assets/portfolio/pharma-2.png',
        'assets/portfolio/pharma-3.png',
      ],
    },
    {
      id: 8,
      title: 'BTechCars – Online Car Marketplace & Services Platform',
      category: 'Web Development',
      description:
        'A comprehensive automobile platform that enables users to buy and sell new and used cars, book vehicle servicing, and explore premium rentals like supercars, yachts, and aircraft. The platform focuses on seamless user experience, transparent pricing, and end-to-end automotive solutions.',
      image: 'assets/portfolio/car-1.png',
      client: 'BTechCars',
      technologies: [
        'Angular',
        'JavaScript',
        'Node.js',
        'Express',
        'MongoDB',
        'REST API',
        'Bootstrap',
      ],
      liveUrl: 'https://www.btechcars.com/',
      githubUrl: '', // add if available
      images: [
        'assets/portfolio/car-1.png',
        'assets/portfolio/car-2.png',
        'assets/portfolio/car-3.png',
      ],
    },
    {
      id: 9,
      title: 'TintinTwinkle – Kids E-Commerce Platform',
      category: 'Web Development',
      description:
        'A modern kids-focused e-commerce platform offering a wide range of products including toys, clothing, educational items, and accessories for babies and children. The platform is designed with vibrant UI, easy navigation, and category-based browsing to enhance the shopping experience for parents.',
      image: 'assets/portfolio/tin-1.png',
      client: 'TintinTwinkle',
      technologies: [
        'Angular',
        'JavaScript',
        'Node.js',
        'Express',
        'MongoDB',
        'REST API',
        'Bootstrap',
      ],
      liveUrl: 'https://tintintwinkle.com/',
      githubUrl: '', // add if available
      images: [
        'assets/portfolio/tin-1.png',
        'assets/portfolio/tin-2.png',
        'assets/portfolio/tin-3.png',
      ],
    },
    {
      id: 10,
      title: 'BTechMart – Multi-Service E-Commerce & Solutions Platform',
      category: 'Web Development',
      description:
        'A versatile digital platform offering a combination of e-commerce and service-based solutions. The platform focuses on delivering products along with specialized services, providing users with a seamless experience for browsing, inquiries, and service engagement. Designed with a scalable structure and user-friendly interface.',
      image: 'assets/portfolio/mart-1.png',
      client: 'BTechMart',
      technologies: [
        'Angular',
        'JavaScript',
        'Node.js',
        'Express',
        'MongoDB',
        'REST API',
        'Bootstrap',
      ],
      liveUrl: 'https://www.btechmart.in/home',
      githubUrl: '', // add if available
      images: [
        'assets/portfolio/mart-1.png',
        'assets/portfolio/mart-2.png',
        'assets/portfolio/mart-3.png',
      ],
    },
    {
      id: 1,
      title: 'Modern E-Commerce Platform',
      category: 'Web Development',
      description:
        'A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      client: 'Fashion Retail Co.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      images: [
        'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      ],
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description:
        'Cross-platform mobile app for healthcare providers to manage patient appointments and medical records.',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      client: 'HealthTech Solutions',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      liveUrl: 'https://example.com',
      images: [],
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      category: 'Web Development',
      description:
        'Interactive dashboard for financial analytics with real-time data visualization and reporting tools.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      client: 'Investment Firm',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL', 'WebSockets'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      images: [],
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      category: 'UI/UX Design',
      description:
        'Complete brand identity and design system for a modern tech startup.',
      image:
        'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      client: 'Tech Startup',
      technologies: [
        'Figma',
        'Illustrator',
        'Design Systems',
        'Brand Strategy',
      ],
      liveUrl: 'https://example.com',
      images: [],
    },
    {
      id: 5,
      title: 'Social Media Analytics Tool',
      category: 'Digital Marketing',
      description:
        'Comprehensive social media analytics platform with competitor tracking and engagement metrics.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      client: 'Marketing Agency',
      technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'AWS'],
      liveUrl: 'https://example.com',
      images: [],
    },
    {
      id: 6,
      title: 'Cloud Migration Project',
      category: 'Cloud Solutions',
      description:
        'Successful migration of enterprise infrastructure to AWS cloud with zero downtime.',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      client: 'Enterprise Corp',
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins'],
      liveUrl: 'https://example.com',
      images: [],
    },
  ];

  private blogs: Blog[] = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt:
        'Explore the latest trends and technologies shaping the future of web development, from AI integration to WebAssembly.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      author: 'John Anderson',
      date: new Date('2024-01-15'),
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      category: 'Technology',
      readTime: 5,
    },
    {
      id: 2,
      title: 'How to Choose the Right Tech Stack for Your Startup',
      excerpt:
        'A comprehensive guide to selecting the perfect technology stack for your startup based on your needs and goals.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      author: 'Sarah Mitchell',
      date: new Date('2024-01-10'),
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Development',
      readTime: 8,
    },
    {
      id: 3,
      title: 'UI/UX Trends That Will Dominate in 2024',
      excerpt:
        'Discover the latest UI/UX design trends that are shaping digital experiences and user expectations.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      author: 'Emily Rodriguez',
      date: new Date('2024-01-05'),
      image:
        'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Design',
      readTime: 6,
    },
    {
      id: 4,
      title: 'The Importance of SEO in 2024: What You Need to Know',
      excerpt:
        'Learn why SEO remains crucial for business success and the latest strategies to improve your search rankings.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      author: 'David Kim',
      date: new Date('2024-01-01'),
      image:
        'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      category: 'Marketing',
      readTime: 7,
    },
  ];

  getServices(): Observable<Service[]> {
    return of(this.services);
  }

  getServiceById(id: number): Observable<Service | undefined> {
    return of(this.services.find((service) => service.id === id));
  }

  getTeam(): Observable<Team[]> {
    return of(this.team);
  }

  getTeamMemberById(id: number): Observable<Team | undefined> {
    return of(this.team.find((member) => member.id === id));
  }

  getPortfolio(): Observable<Portfolio[]> {
    return of(this.portfolio);
  }

  getPortfolioById(id: number): Observable<Portfolio | undefined> {
    return of(this.portfolio.find((item) => item.id === id));
  }

  getBlogs(): Observable<Blog[]> {
    return of(this.blogs);
  }

  getBlogById(id: number): Observable<Blog | undefined> {
    return of(this.blogs.find((blog) => blog.id === id));
  }
}

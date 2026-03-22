// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { PortfolioCardComponent } from '../../shared/portfolio-card/portfolio-card.component';
// import { DataService } from '../../services/data.service';
// import { Portfolio } from '../../models/portfolio';

// @Component({
//   selector: 'app-portfolio',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterModule,
//     MatTabsModule,
//     MatProgressSpinnerModule,
//     PortfolioCardComponent,
//   ],
//   templateUrl: './portfolio.component.html',
//   styleUrls: ['./portfolio.component.scss'],
// })
// export class PortfolioComponent implements OnInit {
//   portfolio: Portfolio[] = [];
//   loading = true;

//   categories = [
//     'All',
//     'Web Development',
//     'Mobile Development',
//     'UI/UX Design',
//     'Digital Marketing',
//     'Cloud Solutions',
//   ];
//   selectedCategory = 'All';

//   constructor(private dataService: DataService) {}

//   ngOnInit() {
//     this.dataService.getPortfolio().subscribe((portfolio) => {
//       this.portfolio = portfolio;
//       this.loading = false;
//     });
//   }

//   filterProjects() {
//     if (this.selectedCategory === 'All') {
//       return this.portfolio;
//     }
//     return this.portfolio.filter(
//       (project) => project.category === this.selectedCategory,
//     );
//   }

//   selectCategory(category: string) {
//     this.selectedCategory = category;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { PortfolioCardComponent } from '../../shared/portfolio-card/portfolio-card.component';
import { DataService } from '../../services/data.service';
import { Portfolio } from '../../models/portfolio';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    PortfolioCardComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio[] = [];
  filteredPortfolio: Portfolio[] = [];
  displayedPortfolio: Portfolio[] = [];
  loading = true;

  // Pagination variables
  itemsPerPage = 6;
  currentPage = 1;
  showLoadMore = true;

  categories = [
    'All',
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
  ];
  selectedCategory = 'All';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPortfolio().subscribe((portfolio) => {
      this.portfolio = portfolio;
      this.filteredPortfolio = this.portfolio;
      this.updateDisplayedProjects();
      this.loading = false;
    });
  }

  filterProjects() {
    if (this.selectedCategory === 'All') {
      this.filteredPortfolio = this.portfolio;
    } else {
      this.filteredPortfolio = this.portfolio.filter(
        (project) => project.category === this.selectedCategory,
      );
    }
    // Reset pagination when category changes
    this.currentPage = 1;
    this.updateDisplayedProjects();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterProjects();
  }

  updateDisplayedProjects() {
    const startIndex = 0;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.displayedPortfolio = this.filteredPortfolio.slice(
      startIndex,
      endIndex,
    );
    this.showLoadMore = endIndex < this.filteredPortfolio.length;
  }

  loadMore() {
    this.currentPage++;
    this.updateDisplayedProjects();
  }

  hasMoreProjects(): boolean {
    return this.currentPage * this.itemsPerPage < this.filteredPortfolio.length;
  }
}

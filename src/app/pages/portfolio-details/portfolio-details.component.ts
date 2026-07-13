// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute, RouterModule } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { DataService } from '../../services/data.service';
// import { Portfolio } from '../../models/portfolio';

// @Component({
//   selector: 'app-portfolio-details',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterModule,
//     MatButtonModule,
//     MatCardModule,
//     MatChipsModule,
//     MatProgressSpinnerModule,
//   ],
//   templateUrl: './portfolio-details.component.html',
//   styleUrls: ['./portfolio-details.component.scss'],
// })
// export class PortfolioDetailsComponent implements OnInit {
//   project: Portfolio | undefined;
//   loading = true;
//   showImageModal = false;
//   currentImageIndex = 0;
//   currentImage = '';

//   constructor(
//     private route: ActivatedRoute,
//     private dataService: DataService,
//   ) {}

//   ngOnInit() {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.dataService.getPortfolioById(id).subscribe((project) => {
//       this.project = project;
//       this.loading = false;
//     });
//   }
//   openImageViewer(index: number) {
//     if (this.project?.images && this.project.images.length > 0) {
//       this.currentImageIndex = index;
//       this.currentImage = this.project.images[index];
//       this.showImageModal = true;
//       // Prevent body scrolling when modal is open
//       document.body.style.overflow = 'hidden';
//     }
//   }

//   closeImageViewer() {
//     this.showImageModal = false;
//     // Restore body scrolling
//     document.body.style.overflow = '';
//   }

//   nextImage() {
//     if (this.project?.images && this.project.images.length > 0) {
//       this.currentImageIndex =
//         (this.currentImageIndex + 1) % this.project.images.length;
//       this.currentImage = this.project.images[this.currentImageIndex];
//     }
//   }

//   previousImage() {
//     if (this.project?.images && this.project.images.length > 0) {
//       this.currentImageIndex =
//         (this.currentImageIndex - 1 + this.project.images.length) %
//         this.project.images.length;
//       this.currentImage = this.project.images[this.currentImageIndex];
//     }
//   }

//   setCurrentImage(index: number) {
//     if (this.project?.images && this.project.images.length > 0) {
//       this.currentImageIndex = index;
//       this.currentImage = this.project.images[index];
//     }
//   }
// }

import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataService } from '../../services/data.service';
import { Portfolio } from '../../models/portfolio';

@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss'],
})
export class PortfolioDetailsComponent implements OnInit {
  project: Portfolio | undefined;
  loading = true;
  showImageModal = false;
  currentImageIndex = 0;
  currentImage = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loading = true;
      const id = Number(params.get('id'));
      this.dataService.getPortfolioById(id).subscribe((project) => {
        this.project = project;
        this.loading = false;
      });
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.showImageModal) return;

    if (event.key === 'ArrowLeft') {
      this.previousImage();
      event.preventDefault();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
      event.preventDefault();
    } else if (event.key === 'Escape') {
      this.closeImageViewer();
      event.preventDefault();
    }
  }

  openImageViewer(index: number) {
    if (this.project?.images && this.project.images.length > 0) {
      this.currentImageIndex = index;
      this.currentImage = this.project.images[index];
      this.showImageModal = true;
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
  }

  closeImageViewer() {
    this.showImageModal = false;
    // Restore body scrolling
    document.body.style.overflow = '';
  }

  nextImage() {
    if (this.project?.images && this.project.images.length > 0) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.project.images.length;
      this.currentImage = this.project.images[this.currentImageIndex];
    }
  }

  previousImage() {
    if (this.project?.images && this.project.images.length > 0) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.project.images.length) %
        this.project.images.length;
      this.currentImage = this.project.images[this.currentImageIndex];
    }
  }

  setCurrentImage(index: number) {
    if (this.project?.images && this.project.images.length > 0) {
      this.currentImageIndex = index;
      this.currentImage = this.project.images[index];
    }
  }
}

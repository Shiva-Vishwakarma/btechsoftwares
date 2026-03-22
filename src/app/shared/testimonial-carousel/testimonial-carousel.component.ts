import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-testimonial-carousel',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './testimonial-carousel.component.html',
  styleUrls: ['./testimonial-carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
      transition(':decrement', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
    ]),
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class TestimonialCarouselComponent implements OnInit, OnDestroy {
  @Input() testimonials: any[] = [];
  @Input() autoPlay: boolean = true;
  @Input() autoPlayInterval: number = 5000; // 5 seconds
  @Input() showDots: boolean = true;
  @Input() showArrows: boolean = true;

  currentIndex: number = 0;
  private autoPlayTimer: any;
  private touchStartX: number = 0;
  private touchEndX: number = 0;

  ngOnInit() {
    if (this.autoPlay && this.testimonials.length > 1) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayInterval);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

  resetAutoPlay() {
    if (this.autoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  nextSlide() {
    if (this.testimonials.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      this.resetAutoPlay();
    }
  }

  previousSlide() {
    if (this.testimonials.length > 0) {
      this.currentIndex =
        (this.currentIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
      this.resetAutoPlay();
    }
  }

  goToSlide(index: number) {
    if (index !== this.currentIndex) {
      this.currentIndex = index;
      this.resetAutoPlay();
    }
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.previousSlide();
      }
    }
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getCurrentTestimonial() {
    return this.testimonials[this.currentIndex];
  }
}

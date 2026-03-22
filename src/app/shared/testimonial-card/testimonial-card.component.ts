import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent {
  @Input() name: string = '';
  @Input() position: string = '';
  @Input() company: string = '';
  @Input() image: string = '';
  @Input() text: string = '';
  @Input() rating: number = 5;

  getStarsArray(): number[] {
    return Array(this.rating).fill(0);
  }
}

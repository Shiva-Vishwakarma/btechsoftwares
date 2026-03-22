import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.scss'],
})
export class CtaSectionComponent {
  @Input() title: string = 'Ready to Start Your Project?';
  @Input() subtitle: string =
    "Let's work together to bring your ideas to life.";
  @Input() buttonText: string = 'Get in Touch';
  @Input() buttonLink: string = '/contact';
  @Input() secondaryButtonText: string = '';
  @Input() secondaryButtonLink: string = '';
  @Input() variant: 'default' | 'dark' | 'light' = 'default';
}

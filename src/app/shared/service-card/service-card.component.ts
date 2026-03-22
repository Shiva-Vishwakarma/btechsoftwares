// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-service-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './service-card.component.html',
//   styleUrl: './service-card.component.scss'
// })
// export class ServiceCardComponent {

// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  @Input() service: any;
}

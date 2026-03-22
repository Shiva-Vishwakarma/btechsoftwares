// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-services',
//   standalone: true,
//   imports: [],
//   templateUrl: './services.component.html',
//   styleUrl: './services.component.scss'
// })
// export class ServicesComponent {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatProgressSpinnerModule, // Add this import
    ServiceCardComponent,
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  loading = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getServices().subscribe((services) => {
      this.services = services;
      this.loading = false;
    });
  }
}

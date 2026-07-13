// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-service-details',
//   standalone: true,
//   imports: [],
//   templateUrl: './service-details.component.html',
//   styleUrl: './service-details.component.scss'
// })
// export class ServiceDetailsComponent {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule, // Add this import
  ],
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent implements OnInit {
  service: Service | undefined;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loading = true;
      const id = Number(params.get('id'));
      this.dataService.getServiceById(id).subscribe((service) => {
        this.service = service;
        this.loading = false;
      });
    });
  }
}

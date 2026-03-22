// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-team-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './team-card.component.html',
//   styleUrl: './team-card.component.scss'
// })
// export class TeamCardComponent {

// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent {
  @Input() member: any;
}

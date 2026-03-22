import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TeamCardComponent } from '../../shared/team-card/team-card.component';
import { DataService } from '../../services/data.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    TeamCardComponent,
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  team: Team[] = [];
  loading = true;

  departments = [
    { id: 'all', name: 'All Team' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
  ];

  selectedDepartment = 'all';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTeam().subscribe((team) => {
      this.team = team;
      this.loading = false;
    });
  }

  filterTeam() {
    if (this.selectedDepartment === 'all') {
      return this.team;
    }

    // Filter based on department (you can add department property to team model)
    return this.team.filter((member) => {
      const position = member.position.toLowerCase();
      if (this.selectedDepartment === 'leadership') {
        return (
          position.includes('ceo') ||
          position.includes('cto') ||
          position.includes('director')
        );
      } else if (this.selectedDepartment === 'development') {
        return position.includes('developer') || position.includes('engineer');
      } else if (this.selectedDepartment === 'design') {
        return position.includes('designer');
      } else if (this.selectedDepartment === 'marketing') {
        return position.includes('marketing');
      }
      return true;
    });
  }

  selectDepartment(department: string) {
    this.selectedDepartment = department;
  }
}

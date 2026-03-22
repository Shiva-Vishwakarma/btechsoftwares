import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataService } from '../../services/data.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  post: Blog | undefined;
  relatedPosts: Blog[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getBlogById(id).subscribe((post) => {
      this.post = post;
      this.loadRelatedPosts(post?.category);
      this.loading = false;
    });
  }

  loadRelatedPosts(category?: string) {
    this.dataService.getBlogs().subscribe((posts) => {
      if (category && this.post) {
        this.relatedPosts = posts
          .filter((p) => p.category === category && p.id !== this.post?.id)
          .slice(0, 3);
      }
    });
  }
}

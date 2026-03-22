import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BlogCardComponent } from '../../shared/blog-card/blog-card.component';
import { DataService } from '../../services/data.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    BlogCardComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  loading = true;

  categories = ['All', 'Technology', 'Development', 'Design', 'Marketing'];
  selectedCategory = 'All';

  searchQuery = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getBlogs().subscribe((blogs) => {
      this.blogs = blogs;
      this.filteredBlogs = blogs;
      this.loading = false;
    });
  }

  filterBlogs() {
    let filtered = this.blogs;

    // Filter by category
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(
        (blog) => blog.category === this.selectedCategory,
      );
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query) ||
          blog.author.toLowerCase().includes(query),
      );
    }

    this.filteredBlogs = filtered;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterBlogs();
  }

  onSearch(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value;
    this.filterBlogs();
  }
}

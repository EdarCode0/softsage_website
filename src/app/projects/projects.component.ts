import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {

  public images: string[] = [
    'assets/images/portfolio/fullsize/1.jpg',
    'assets/images/portfolio/fullsize/2.jpg',
    'assets/images/portfolio/fullsize/3.jpg',
    'assets/images/portfolio/fullsize/4.jpg',
    'assets/images/portfolio/fullsize/5.jpg',
    'assets/images/portfolio/fullsize/6.jpg',
  ];

  public currentImageIndex: number = 0;
  public isSlideshowOpen: boolean = false;

  openSlideshow(index: number): void {
    this.currentImageIndex = index;
    this.isSlideshowOpen = true;
  }

  closeSlideshow(): void {
    this.isSlideshowOpen = false;
  }

  showNextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  showPrevImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}

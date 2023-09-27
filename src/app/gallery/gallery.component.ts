import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Lightbox } from 'ngx-lightbox';

interface AlbumItem {
  src: string;
  caption: string;
  thumb: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  faCoffee = faCoffee;
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

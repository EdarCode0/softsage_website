import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {

  public images: string[] = [
    'assets/images/portfolio/fullsize/1400x919-MargaritaPizza-555a4065-2573-4b41-bcf3-7193cd095d8f-0-1400x919.jpg',
    'assets/images/portfolio/fullsize/HD-wallpaper-fitness-girl-gym-girl-black-fitness-woman.jpg',
    'assets/images/portfolio/fullsize/gettyimages-933898972-640x640.jpg',
    'assets/images/portfolio/fullsize/360_F_610620762_tn5NVwSRKvUV5UXibzopJeWuIyS44Dsd.jpg',
  ];

   imageInfo: any = [
    { category: 'Web application', name: 'Pizza Food Delievery' },
    { category: 'Web application', name: 'Gym Registration Plaform' },
    { category: 'Application', name: 'Finger Tracker' },
    { category: 'Software', name: 'Language Identification Tool' },
    
  ];

  public imageLinks: string[] = [
    'https://github.com/martgjepali/PizzaDelivery',
    'https://github.com/martgjepali/gym_registration_app',
    'https://github.com/Fori99/Finger-Tracker',
    'https://github.com/Fori99/Language-Identification-Tool',
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

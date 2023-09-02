import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMobileMenuOpen = false;
  show = false;
  isTransparent = true;
  @ViewChild('videoElement') videoElement!: ElementRef;
  @ViewChild('carouselElement') carouselElement!: ElementRef;

  constructor() { }
  smoothResetVideo() {
    const video = this.videoElement.nativeElement;

    // Gradually decrease the volume to give a fade-out effect
    let volume = video.volume;
    const fadeOutInterval = setInterval(() => {
      if (volume > 0) {
        volume -= 0.05; // Adjust the rate of volume decrease as needed
        video.volume = volume;
      } else {
        clearInterval(fadeOutInterval);
        video.currentTime = 0; // Reset the video to the beginning
        video.volume = 1; // Restore the volume
      }
    }, 100); // Adjust the interval duration as needed for smoother effect
  }

  // Add a scroll event listener to smoothly reset the video when the user scrolls to another section
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Implement your logic here to detect when the user scrolls to another section
    // For example, you can check the scroll position and trigger the smooth reset when it reaches a certain threshold.
    const threshold = 500; // Adjust this value as needed
    const scrollPosition = window.scrollY;

    if (scrollPosition >= threshold) {
      this.smoothResetVideo();
    }
  }

  @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
    // Determine the scroll position
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Toggle the classes based on the scroll position
    if (scrollY <= 0) {
      this.isTransparent = true;
    } else {
      this.isTransparent = false;
    }
  }
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  toogle(){
    this.show = !this.show;
  }
}

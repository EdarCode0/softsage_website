import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  faCoffee = faCoffee;

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

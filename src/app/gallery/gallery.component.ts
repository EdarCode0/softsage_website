import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {

  constructor(private modalService: NgbModal) {}
image: any = [];
  ngOnInit() {
    this.image = [
      {
        id: 1,
        imageSrc: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495__480.jpg"
      },
      {
        id: 2,
        imageSrc: "https://source.unsplash.com/aob0ukAYfuI/400x300"
      },
      {
        id: 3,
        imageSrc: "https://source.unsplash.com/M185_qYH8vg/400x300"
      },
      {
        id: 4,
        imageSrc: "https://source.unsplash.com/sesveuG_rNo/400x300"
      },
      {
        id: 5,
        imageSrc: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBwYXJ0eXxlbnwwfHwwfHw%3D&w=400&q=80"
      },
      {
        id: 6,
        imageSrc: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&w=400&q=80"
      },
      {
        id: 7,
        imageSrc: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmV8ZW58MHx8MHx8&w=400&q=80"
      },
      {
        id: 8,
        imageSrc: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_614867390_321301.jpg"
      }
    ];
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }

 getImageId(id: any){
  // return this.image[id].id;
  console.log(this.image[id].id);
 }

 imgSrc:any;
  onClick(event: any){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.imgSrc = srcAttr.nodeValue;
  }
}

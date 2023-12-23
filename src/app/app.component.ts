import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  isLoading = true;

  ngOnInit(): void {
    AOS.init();
    AOS.refresh();
    setTimeout(() => {
      this.isLoading = false;
    }, 1700);
  }
}

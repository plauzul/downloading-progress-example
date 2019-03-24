import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('pdfviewer') pdfviewer;
  page: number = 1;
  zoom: number = 0.5;

  constructor(public navCtrl: NavController) {}

  ionViewWillEnter() {
    console.log(this.pdfviewer);
  }

  setPage(option) {
    if(option == 1) {
      this.page += 1;
    } else {
      if(this.page >= 1) {
        this.page -= 1;
      }
    }
  }

  setZoom(option) {
    if(option == 1) {
      if(this.zoom <= 2) {
        this.zoom += 0.25;
      }
    } else {
      if(this.zoom >= 0.5) {
        this.zoom -= 0.25;
      }
    }
  }

  resetZoom() {
    this.zoom = 0.5;
  }

}

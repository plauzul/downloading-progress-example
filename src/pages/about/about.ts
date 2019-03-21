import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('pdfviewer') pdfviewer;

  constructor(public navCtrl: NavController) {}

  ionViewWillEnter() {
    this.pdfviewer.refresh()
    console.log(this.pdfviewer);
  }

}

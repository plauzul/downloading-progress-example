import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-download',
  templateUrl: 'download.html',
})
export class DownloadPage {

  downloadProgress: number = 0;
  intervalProgress: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewWillEnter() {
    this.updateProgress();
  }

  updateProgress() {
    this.intervalProgress = setInterval(() => {
      this.downloadProgress += 1;
    }, 1000);
  }

  close() {
    this.viewCtrl.dismiss();
  }

  ionViewWillLeave() {
    clearInterval(this.intervalProgress);
  }

}

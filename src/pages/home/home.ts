import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DownloadPage } from "../download/download";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {}

  toDownload() {
    const modal = this.modalCtrl.create(DownloadPage, {}, {cssClass: "custom-bottom-modal"});
    modal.present();
  }

}

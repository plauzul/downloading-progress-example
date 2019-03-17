import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { DownloadPage } from "../download/download";
import { ContactPage } from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  openedDownloadModal: boolean;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  toDownload() {
    if(!this.openedDownloadModal) {
      this.openedDownloadModal = true;
      const modal = this.modalCtrl.create(DownloadPage, {}, {cssClass: "custom-bottom-modal"});
      modal.onDidDismiss(() => {
        this.openedDownloadModal = false;
      });
      modal.present();
    }
  }

  toContact() {
    this.navCtrl.push(ContactPage);
  }

}

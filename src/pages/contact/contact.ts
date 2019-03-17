import { Component, Renderer2, ViewChild, HostListener } from '@angular/core';
import { NavController, Navbar, Content } from 'ionic-angular';

declare const PictureInPicture;
declare const jwplayer;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild(Navbar) navbar: Navbar;
  @ViewChild(Content) content: Content;
  hasPip: boolean;

  constructor(public navCtrl: NavController, public renderer: Renderer2) {}

  @HostListener('window:resize') onResize() {
    this.changeHeader();
  }

  ionViewWillEnter() {
    jwplayer("video").setup({
      "file": "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmNyxLdLauwd9DAG-SdilJRmrciiizlyhBQ2fO6WniS1ltiUJ"
    });
  }

  openPip() {
    PictureInPicture.enter(800, 800);
  }

  changeHeader() {
    PictureInPicture.isPip((success) => {
      this.hasPip = (success == 'true');
      if (this.hasPip) {
        this.renderer.setStyle(this.navbar.getNativeElement(), 'margin-top', '-56px');
      } else {
        this.renderer.setStyle(this.navbar.getNativeElement(), 'margin-top', '0px');
      }
      this.content.resize();
    });
  }
}

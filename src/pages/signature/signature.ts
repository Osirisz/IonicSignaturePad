import { Component, ViewChild } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;
  constructor(public navParams: NavParams, public navCtrl: NavController) {
  }
  public signatureImage: string;
  private signaturePadOptions: Object = {
    'minWidth': 1,
    'canvasWidth': 300,
    'canvasHeight': 150
  }
  ngAfterViewInit() {
    this.signaturePad.clear();
  }
  drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    console.log(this.signatureImage);
    this.navCtrl.push(HomePage, { signatureImage: this.signatureImage });
  }
  drawClear() {
    this.signaturePad.clear();
  }
  drawCancel() {
    this.navCtrl.push(HomePage, { signatureImage: '' });
  }
}

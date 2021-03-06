import { AuthService } from './../../services/auth.service';
import { CredenciaisDTO } from './../../models/credenciais.dto';
import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { MenuController } from "ionic-angular/components/app/menu-controller";


@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {}

  creds : CredenciaisDTO = {
    email: "",
    senha : ""
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
          console.log(response.headers.get('Authorization'));
          this.navCtrl.setRoot('GruposPage');
      },
      error => {});
  }
}

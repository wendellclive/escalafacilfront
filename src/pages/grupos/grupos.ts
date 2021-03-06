import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GrupoService } from "../../services/domain/grupo.service";
import { GrupoDTO } from "../../models/grupo.dto";

/**
 * Generated class for the GruposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-grupos",
  templateUrl: "grupos.html"
})
export class GruposPage {

  items: GrupoDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public grupoService: GrupoService
  ) {}

  ionViewDidLoad() {
    this.grupoService.findAll()
        .subscribe(response => {
        this.items = response;
    },
    error => {   });
  }
}

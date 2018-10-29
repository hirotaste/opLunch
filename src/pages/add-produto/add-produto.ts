import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Produto } from './../../models/produto/produto.model';
import { ProdutoListService } from './../../services/produto.list/produto.list.service';

@IonicPage({
  name: 'AddProdutoPage',
  segment: 'AddProdutoPage'
})
@Component({
  selector: 'page-add-produto',
  templateUrl: 'add-produto.html',
})
export class AddProdutoPage {

  item: Produto = {
    name: '',
    price: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private prodls: ProdutoListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProdutoPage');
  }

  addItem(item: Produto) {
    this.prodls.addItem(item)
      .then(ref => {
        this.navCtrl.setRoot('HomePage', { key: ref.key})
      });
  }

}

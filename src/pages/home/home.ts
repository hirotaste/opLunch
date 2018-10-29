import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { ProdutoListService } from '../../services/produto.list/produto.list.service';
import { Produto } from '../../models/produto/produto.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  prodList$: Observable<Produto[]>

  constructor(public navCtrl: NavController, private prodls: ProdutoListService) {
    this.prodList$ = this.prodls
      .getProdutoList() //DB LIST
      .snapshotChanges() // Key and Value
      .map(changes => { //para cada objeto traz ele
        return changes.map( c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      })
  }

}

import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";

import { Produto } from './../../models/produto/produto.model';

@Injectable()
export class ProdutoListService {

  private produtoListRef = this.db.list<Produto>('produtos');

  constructor(private db: AngularFireDatabase) {
    //
  }

  getProdutoList() {
    return this.produtoListRef;
  }

  addItem(item: Produto) {
    return this.produtoListRef.push(item);
  }
}

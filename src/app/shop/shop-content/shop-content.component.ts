import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.css']
})
export class ShopContentComponent implements OnInit {

  qtdProdutos: number = 200;

  constructor() { }

  ngOnInit(): void {
  }

  getQtdProdutos(): number {
    return this.qtdProdutos;
  }

}

import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interface/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})


export class ProductlistComponent implements OnInit {
  listProduct: IProduct[] = [];
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ];
  private _filterValue: string = '';

  ngOnInit(): void {
    this.listProduct = this.products;
  }

  get filter() {
    return this._filterValue;
  }

  set filter(value: string) {
    this._filterValue = value;
    this.products = this.listProduct.filter(p => p.productName.toLowerCase().includes(this._filterValue.toLowerCase()))
  }

  // rating(n: number) {
  //   return Array(Math.round(n)).fill(null);
  // }
}


const heli_imp = new Card(
  "005",
  "Heli-imp",
  4,
  1,
  ["demonoid"],
  {
    effect: () => { }, //FuckEmUp() Find card with lowest HP then swap them with current attacker
    requirements: ["opp", "weakestTarget"],
    event: "onAttack",
    type: "attack"
  }
);

const roidruid = new Card(
  "006",
  "Roidruid", //A.K.A Druid with STR build
  7,
  7,
  ["humanoid"],
  {
    effect: () => { }, //BuildDifferent(1:damage) Randomly move to front row, dealing damage to allies. Yes. To allies.
      requirements: ["own"],
    event: "onAttack",
    type: "attack"
  }
);

const ouroboros_dog = new Card(
  "007",
  "Ouroboros Dog", //A dog chasing his tail
  1,
  2,
  ["animal"],
  {
    effect: () => spawnAlly(dog, 0), //UnOuroboroboros() Spawn dog onHit
    requirements: ["own"],
    event: "onHit",
    type: "spawn"
  }
);

const dog = new Card(
  "008",
  "Dog", //A dog not chasing his tail
  2,
  1,
  ["animal"],
  {   
    effect: () => increaseHPToTypes(1, ["animal"]),
    requirements: ["own"],
    event: "onSpawn",
    type: "buff",
}
);
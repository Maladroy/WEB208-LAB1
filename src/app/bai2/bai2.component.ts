import { Component, OnInit } from '@angular/core';
import { Inventor } from './bai2.interface';
@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {
  inventors: Inventor[] = [{
    "id": 1,
    "first": "Rinaldo",
    "last": "Rotherforth",
    "year": 1970,
    "passed": 1994
  }, {
    "id": 2,
    "first": "Maddie",
    "last": "Pallent",
    "year": 1966,
    "passed": 1990
  }, {
    "id": 3,
    "first": "Fitzgerald",
    "last": "Quant",
    "year": 1989,
    "passed": 2011
  }, {
    "id": 4,
    "first": "Moira",
    "last": "Batha",
    "year": 1940,
    "passed": 1991
  }, {
    "id": 5,
    "first": "Valina",
    "last": "Mapson",
    "year": 1965,
    "passed": 1993
  }, {
    "id": 6,
    "first": "Lanita",
    "last": "Banfield",
    "year": 1985,
    "passed": 2010
  }, {
    "id": 7,
    "first": "Karole",
    "last": "Beese",
    "year": 1995,
    "passed": 2020
  }]
  show(innerHTML: string) {
    document.querySelector('#inventor')!.innerHTML = innerHTML;
  }
  render(callback: any) {
    let innerHTML = this.inventors.map(inventor => {
      return `<tr>
    <td>${inventor.id}</td>
    <td>${inventor.first}</td>
    <td>${inventor.last}</td>
    <td>${inventor.year}</td>
    <td>${inventor.passed}</td>
    </tr>`;
    }, '').join('');
    callback(innerHTML)
  }

  ngOnInit() {
    this.render(this.show)
  }
}

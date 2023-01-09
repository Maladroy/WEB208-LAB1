import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  title = 'FPT POLYTECHNIC';
  student = {
    hoten: "Hoang Chi Lam",
    gioitinh: "Nam",
    ngaysinh: "11/3/2000",
    anh: "https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n-234x375.png",
    diemTB: 8.9
  }
}

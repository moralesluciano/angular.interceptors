import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const PRODUCTS_URL = "http://localhost:3000/products";
const NEW_PRODUCT = "http://localhost:3000//products/register";
const product = {
  "id": 4,
  "name": "Licensed Frozen Hat",
  "description": "Incidunt et magni est ut.",
  "price": "170.00",
  "imageUrl": "https://source.unsplash.com/1600x900/?product",
  "quantity": 56840
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Example';

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get(PRODUCTS_URL).subscribe((data)=>{
      console.log('get: ',data);
    });

    /*this.httpClient.post(NEW_PRODUCT, product).subscribe(
      next => console.log('post: ', next),
    );

    this.httpClient.get(PRODUCTS_URL).subscribe((data)=>{
      console.log('get: ',data);
    }); */
  }
}
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  isAdmin = true;
  data: any = []

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getData().subscribe(response => {
      this.data = response
      console.log(response)
    })
  }





}

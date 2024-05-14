import { Component } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SlicePipe,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day4';


    

  




}

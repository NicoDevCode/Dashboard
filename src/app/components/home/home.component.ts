import { Component, OnInit } from '@angular/core';
import {HomeService} from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  last_favoritos: any[];
  last_publicados: any[];
  progress = false;
  constructor(private service: HomeService) { }

  ngOnInit() {
    this.progress = true;
    setTimeout(() => {
      this.getLastStories();
    }, 500 );
  }

  getLastStories() {
    this.service.getLastStories().subscribe(
      data => {
        this.last_favoritos = data['favorites'];
        this.last_publicados = data['last'];
        this.progress = false;
        console.log(this.last_publicados);
        console.log(this.last_favoritos);
          console.log(data);
      }
    );
  }

}

import {Component, OnInit} from '@angular/core';
import {CanalesService} from './services/canales.service';
import {domain} from '../utils/api';

@Component({
  selector: 'app-canales',
  templateUrl: './canales.component.html',
  styleUrls: ['./canales.component.css']
})
export class CanalesComponent implements OnInit {
  canales: any[];
  filter = {};
  canales_url = `${domain}/api/stories/`;
  next_url = null;
  prev_url = null;
  current_url = null;
  pages = null;
  items = null;
  num_prioridad = null;
  progress = false;
  constructor(private service: CanalesService) {
  }

  ngOnInit() {
    this.progress = true;
    setTimeout(() => {
      this.getChannels(null, this.canales_url);
    }, 500 );
  }

  getChannels(filter, url) {
    this.service.getChanelsFilter(filter, url).subscribe(
      data => {
        this.canales = data['results'];
        this.next_url = data['next'];
        this.prev_url = data['prev'];
        this.current_url = data['current_page'];
        this.pages = data['pages'];
        this.items = data['count'];
        console.log(this.canales);
        console.log(this.current_url);
        this.progress = false;
      }
    );
  }

  setPage(page) {
    window.scrollTo(0,0);
    this.getChannels(this.filter, `${this.canales_url}?page=${page}`);
  }

  search($event) {
    console.log($event);
    this.filter = {name: $event.target.value};
    this.getChannels(this.filter, this.canales_url);
  }

  addFavoritos(id, $event) {
    console.log($event['key']);
    console.log(id);
    console.log($event);
    this.num_prioridad = $event.target.value;
    if (this.num_prioridad >= 0 || this.num_prioridad !== null) {
      this.service.updatePrioridad(id, {'order': this.num_prioridad}).subscribe(
        data => {
        }
      );
    }
  }

}

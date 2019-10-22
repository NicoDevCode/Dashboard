import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ModalEditPrioridadComponent} from './modal-edit-prioridad/modal-edit-prioridad.component';
import {TemasService} from './services/temas.service';
import {domain} from '../utils/api';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {
  temas: any[];
  filter = {};
  favorites_url = `${domain}/api/stories/?favorites=true`;
  next_url = null;
  prev_url = null;
  current_url = null;
  pages = null;
  items = null;
  progress = false;
  constructor(public dialog: MatDialog, private service: TemasService) {
  }

  ngOnInit() {
    this.progress = true;
    setTimeout(() => {
      this.getTemas(null, this.favorites_url);
    }, 500 );
  }

  getTemas(filter, url) {
    this.service.getTemasFilter(filter, url).subscribe(
      data => {
        this.temas = data['results'];
        this.next_url = data['next'];
        this.prev_url = data['prev'];
        this.current_url = data['current_page'];
        this.pages = data['pages'];
        this.items = data['count'];
        console.log(this.temas);
        this.progress = false;
      }
    );
  }

  setPage(page) {
    window.scrollTo(0,0);
    this.getTemas(this.filter, `${this.favorites_url}?page=${page}`);
  }

  search($event) {
    console.log($event);
    this.filter = {name: $event.target.value};
    this.getTemas(this.filter, this.favorites_url);
  }

  openDialog(tema_id): void {
    const dialogRef = this.dialog.open(ModalEditPrioridadComponent, {data: tema_id});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result['success']) {
        this.getTemas(null, this.favorites_url);
      }
      console.log('The dialog was closed');
    });
  }

}

import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TemasComponent} from '../temas.component';
import {ModalEditPrioridadService} from './services/modal-edit-prioridad.service';

@Component({
  selector: 'app-modal-edit-prioridad',
  templateUrl: './modal-edit-prioridad.component.html',
  styleUrls: ['./modal-edit-prioridad.component.css']
})
export class ModalEditPrioridadComponent implements OnInit, OnDestroy {
  tema_id = null;
  num_prioridad = null;
  result = false;
  constructor(
    private service: ModalEditPrioridadService,
    public dialogRef: MatDialogRef<TemasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.tema_id = this.data;
    console.log(this.tema_id);
  }

  updatePrioridad() {
    this.service.updatePrioridad(this.tema_id, {'order': this.num_prioridad}).subscribe(
      data => {
        this.result = true;
        this.ngOnDestroy();
      }
    );
  }

  ngOnDestroy(): void {
    this.dialogRef.close({success: this.result});
  }


}

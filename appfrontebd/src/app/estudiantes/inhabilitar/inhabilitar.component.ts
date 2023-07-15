import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstudiantesService } from 'src/app/services/estudiantes.service';


@Component({
  selector: 'app-inhabilitar',
  templateUrl: './inhabilitar.component.html',
  styleUrls: ['./inhabilitar.component.css']
})


export class InhabilitarComponent implements OnInit {

  mensaje: string = '';


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private estudiantesService: EstudiantesService,
    public dialogRef: MatDialogRef<InhabilitarComponent>
  ) { }


  ngOnInit(): void {
    const id = this.data.id;

    const estudiante = {
      estado: 'Inactivo'
    }


    this.estudiantesService.inhabilitarEstudiante(id).subscribe({
      next: (response: any) => {

        console.log(response);
        this.mensaje = response.data;

      },
      error: (error) => {
        console.log(error);
        this.mensaje = error.error.message;
      }
    });
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-inhabilitar-cursos',
  templateUrl: './inhabilitar-cursos.component.html',
  styleUrls: ['./inhabilitar-cursos.component.css']
})
export class InhabilitarCursosComponent implements OnInit {

  mensaje: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cursosService: CursosService,
    public dialogRef: MatDialogRef<InhabilitarCursosComponent>
  ) { }

  ngOnInit(): void {
    const id = this.data.id;

    const curso = {
      estado: 'Inactivo'
    }


    this.cursosService.inhabilitarCurso(id, curso).subscribe({
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
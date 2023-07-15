import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-ver-cursos',
  templateUrl: './ver-cursos.component.html',
  styleUrls: ['./ver-cursos.component.css']
})
export class VerCursosComponent implements OnInit {
  cursoData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cursosService: CursosService,
    public dialogRef: MatDialogRef<VerCursosComponent>
  ) { }

  ngOnInit(): void {
    const curso = this.data.id;

    this.cursosService.consultarCurso(curso).subscribe(
      (response: any) => {

        this.cursoData = response.data[0];
        console.log(this.cursoData);

      },
      (error) => {
        console.log(error);
      }
    );
  }
}
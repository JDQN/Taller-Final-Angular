import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  estudianteData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private estudiantesService: EstudiantesService,
    public dialogRef: MatDialogRef<VerComponent>
  ) { }

  ngOnInit(): void {
    const estudiante = this.data.id;

    this.estudiantesService.consultarEstudiante(estudiante).subscribe(
      (response: any) => {

        this.estudianteData = response.data[0];
        console.log(this.estudianteData);

      },
      (error) => {
        console.log(error);
      }
    );
  }

}

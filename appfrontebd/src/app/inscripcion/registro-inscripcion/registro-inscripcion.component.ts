import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { InscripcionService } from 'src/app/services/inscripcion.service';

@Component({
  selector: 'app-registro-inscripcion',
  templateUrl: './registro-inscripcion.component.html',
  styleUrls: ['./registro-inscripcion.component.css']
})
export class RegistroInscripcionComponent implements OnInit {

  registroForm!: FormGroup;
  estudiantes: any[] = [];

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private estudiantesService: EstudiantesService,
    private inscripcionService: InscripcionService,
    public dialogRef: MatDialogRef<RegistroInscripcionComponent>
  ) {

    this.registroForm = this.fb.group({
      estudiante: [''],
      curso: [this.data.cursoId]
    });

  }


  ngOnInit(): void {
    this.estudiantesService.obtenerEstudiantes().subscribe({
      next: (response: any) => {
        this.estudiantes = response.data;
      },
      error: (error) => {
        console.log(error);

      }
    });

  }


  onSubmit(): void {

    if (this.registroForm.value.estudiante != '') {

      const inscripcion = {
        estudianteId: this.registroForm.value.estudiante,
        cursoId: this.registroForm.value.curso,
        estado: 1
      }

      this.inscripcionService.inscripcionEstudiante(inscripcion).subscribe({
        next: (response: any) => {
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.log(error);
          alert(error.error.message);
        }
      });

    } else {
      alert('Debe seleccionar un estudiante');
    }


  }


}
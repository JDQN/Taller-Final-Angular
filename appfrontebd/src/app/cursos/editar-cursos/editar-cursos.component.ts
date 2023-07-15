import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CursosService } from 'src/app/services/cursos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {
  editForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cursosService: CursosService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditarCursosComponent>
  ) {

    this.editForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ.,-_ñÑ ]*$')]],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ.,-_ñÑ ]*$')]],
      cupo: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^[0-9]*$')]],
      horario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ.,-_ñÑ ]*$')]],
      profesor: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ.,-_ñÑ ]*$')]]
    });
  }

  ngOnInit(): void {
    const curso = this.data.id;

    this.cursosService.consultarCurso(curso).subscribe({
      next: (response: any) => {

        const cursoData = response.data[0];
        console.log(cursoData);


        this.editForm.setValue({
          id: cursoData.curso_id,
          nombre: cursoData.curso_nombre,
          descripcion: cursoData.curso_descripcion,
          cupo: cursoData.curso_cupo,
          horario: cursoData.curso_horario,
          profesor: cursoData.curso_profesor,
        });
      },
      error: (error) => {
        console.log(error);
      }
    });




  }


  onSubmit(): void {

    if (this.editForm.valid) {
      const curso = {
        nombre: this.editForm.value.nombre,
        descripcion: this.editForm.value.descripcion,
        cupo: Number(this.editForm.value.cupo),
        horario: this.editForm.value.horario,
        profesor: this.editForm.value.profesor
      }

      this.cursosService.actualizarCurso(this.editForm.value.id, curso).subscribe({
        next: (response: any) => {
          alert('Curso actualizado correctamente');
          this.dialogRef.close();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }


  }
}
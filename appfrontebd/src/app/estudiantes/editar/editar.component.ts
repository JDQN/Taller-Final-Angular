import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  editForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private estudiantesService: EstudiantesService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditarComponent>
  ) {

    this.editForm = this.formBuilder.group({
      id: [''],
      nombres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]],
      apellidos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      correo: ['', [Validators.required, Validators.email]],
      linkedin: ['', [Validators.required]],
      github: ['', [Validators.required]],
    });
  }



  ngOnInit(): void {
    const estudiante = this.data.estudiante;

    this.estudiantesService.consultarEstudiante(estudiante).subscribe({
      next: (response: any) => {

        const estudianteData = response.data[0];
        console.log(estudianteData);

        this.editForm.setValue({
          id: estudianteData.estudiante_id,
          nombres: estudianteData.estudiante_nombres,
          apellidos: estudianteData.estudiante_apellidos,
          celular: estudianteData.estudiante_celular,
          correo: estudianteData.estudiante_correo,
          linkedin: estudianteData.estudiante_linkedin,
          github: estudianteData.estudiante_github,
        })
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      console.log(this.editForm.value);

      const estudiante = {
        nombres: this.editForm.value.nombres,
        apellidos: this.editForm.value.apellidos,
        celular: Number(this.editForm.value.celular),
        correo: this.editForm.value.correo,
        linkedin: this.editForm.value.linkedin,
        github: this.editForm.value.github,
      };

      // Aquí puedes llamar a tu servicio para guardar los cambios del estudiante
      this.estudiantesService.actualizarEstudiante(this.editForm.value.id, estudiante).subscribe({
        next: (response: any) => {
          alert('Actualización exitosa');
          this.dialogRef.close();
        },
        error: (error: any) => {
          console.log(error);
        }
      })
    }
  }
}

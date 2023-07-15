import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm!: FormGroup;

  tipoIdentificacion = [
    { value: 1, viewValue: 'Cédula de ciudadanía' },
    { value: 2, viewValue: 'Tarjeta de identidad' },
    { value: 3, viewValue: 'Pasaporte' },
  ];

  constructor(
    private fb: FormBuilder,
    private estudiantesService: EstudiantesService,
    public dialogRef: MatDialogRef<RegistroComponent>
  ) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      tipoIdentificacion: ['', [Validators.required]],
      numeroIdentificacion: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]*$')]],
      nombres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]],
      apellidos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      correo: ['', [Validators.required, Validators.email]],
      linkedin: ['', [Validators.required]],
      github: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);


      const estudiante = {
        tipoIdentificacion: Number(this.registroForm.value.tipoIdentificacion),
        numeroIdentificacion: Number(this.registroForm.value.numeroIdentificacion),
        nombres: this.registroForm.value.nombres,
        apellidos: this.registroForm.value.apellidos,
        celular: Number(this.registroForm.value.celular),
        correo: this.registroForm.value.correo,
        linkedin: this.registroForm.value.linkedin,
        github: this.registroForm.value.github,
      };

      this.estudiantesService.registrarEstudiante(estudiante).subscribe({
        next: (response: any) => {
          console.log(response);
          alert('Registro exitoso');
          this.dialogRef.close();
        },
        error: (error) => {
          if (error.message instanceof Array) {
            let errorMessage = '';
            error.message.forEach((err: any, index: number) => {
              errorMessage += `${index + 1}. ${err} \n`;
            });
            alert(errorMessage);
          } else {
            alert("Ha ocurrido un error");
          }
        }
      });
    } else {
      this.registroForm.markAllAsTouched();
      alert('Registro fallido');
    }
  }
}

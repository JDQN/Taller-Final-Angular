import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CursosService } from 'src/app/services/cursos.service';
import { InscripcionService } from 'src/app/services/inscripcion.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistroInscripcionComponent } from '../registro-inscripcion/registro-inscripcion.component';

@Component({
  selector: 'app-lista-inscripcion',
  templateUrl: './lista-inscripcion.component.html',
  styleUrls: ['./lista-inscripcion.component.css']
})
export class ListaInscripcionComponent implements OnInit {

  consultaForm!: FormGroup;

  cursos: any[] = [];
  estudiantes: any[] = [];
  estudiantesActivos: any[] = [];
  cupoCurso: number = 0;

  displayedColumns: string[] = ['inscripcion_id', 'inscripcion_fechaCreacion', 'inscripcion_estado', 'estudiante_id', 'estudiante_nombres', 'estudiante_apellidos', 'acciones'];

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private inscripcionService: InscripcionService,
    public dialog: MatDialog
  ) {

    this.consultaForm = this.fb.group({
      curso: ['']
    });

  }

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe({
      next: (response: any) => {
        this.cursos = response.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  get cupoLleno(): boolean {
    return this.estudiantesActivos.length >= this.cupoCurso;
  }

  consultarEstudiantes() {

    const cursoId = this.consultaForm.value.curso;

    if (cursoId != '') {
      this.inscripcionService.obtenerInscritos(cursoId).subscribe({
        next: (response: any) => {
          this.estudiantes = response.data.estudiantes;
          this.cupoCurso = response.data.cupo;


          this.estudiantesActivos = this.estudiantes.filter(estudiante => estudiante.inscripcion_estado == 1);
          console.log(this.estudiantesActivos);
        },
        error: (error) => {
          console.log(error);
        }
      })
    } else {
      alert('Debe seleccionar un curso');
    }

  }

  registrarEstudiantes() {

    const cursoId = this.consultaForm.value.curso;

    const dialogRef = this.dialog.open(RegistroInscripcionComponent, {
      width: '500px',
      data: { cursoId: cursoId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.inscripcionService.obtenerInscritos(cursoId).subscribe({
        next: (response: any) => {
          this.estudiantes = response.data.estudiantes;
          this.cupoCurso = response.data.cupo;
          this.estudiantesActivos = this.estudiantes.filter(estudiante => estudiante.inscripcion_estado == 1);


        },
        error: (error) => {
          console.log(error);
        }
      })
    });

  }

  inhabilitarEstudiante(idInscripcion: number): void {
    const cursoId = this.consultaForm.value.curso;

    this.inscripcionService.actualizarInscripcion(idInscripcion, { estado: 2 }).subscribe({
      next: (response: any) => {
        this.inscripcionService.obtenerInscritos(cursoId).subscribe({
          next: (response: any) => {
            this.estudiantes = response.data.estudiantes;
            this.cupoCurso = response.data.cupo;
            this.estudiantesActivos = this.estudiantes.filter(estudiante => estudiante.inscripcion_estado == 1);


          },
          error: (error) => {
            console.log(error);
          }
        })
      },
      error: (error) => {
        console.log(error);
      }
    })

  }

}
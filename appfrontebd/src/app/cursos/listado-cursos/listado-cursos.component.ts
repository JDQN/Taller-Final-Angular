import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RegistroCursosComponent } from '../registro-cursos/registro-cursos.component';
import { EditarCursosComponent } from '../editar-cursos/editar-cursos.component';
import { VerCursosComponent } from '../ver-cursos/ver-cursos.component';
import { InhabilitarCursosComponent } from '../inhabilitar-cursos/inhabilitar-cursos.component';


@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListaCursosComponent implements OnInit, AfterViewInit {

  cursos: any[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'cupo', 'horario', 'profesor', 'fechaCreacion', 'acciones'];
  dataSource = new MatTableDataSource<any>(this.cursos);

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog
  ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe({
      next: (response: any) => {
        console.log(response);

        this.cursos = response.data;
        this.dataSource = new MatTableDataSource<any>(this.cursos);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  abrirDialogoRegistro() {

    const dialogRef = this.dialog.open(RegistroCursosComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {

      this.cursosService.obtenerCursos().subscribe(
        (response: any) => {
          this.cursos = response.data;
          this.dataSource = new MatTableDataSource<any>(this.cursos);
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          console.log(error);
        }
      );

    });

  }

  verCurso(curso: number) {

    const dialogRef = this.dialog.open(VerCursosComponent, {
      width: '500px',
      data: { id: curso }
    });

  }

  abrirDialogoEditar(curso: number) {
    const dialogRefEdit = this.dialog.open(EditarCursosComponent, {
      width: '500px',
      data: { id: curso }
    });

    dialogRefEdit.afterClosed().subscribe(result => {

      this.cursosService.obtenerCursos().subscribe(
        (response: any) => {
          this.cursos = response.data;
          this.dataSource = new MatTableDataSource<any>(this.cursos);
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          console.log(error);
        }
      );

    });
  }

  inhabilitarCurso(curso: number) {
    const dialogRefInh = this.dialog.open(InhabilitarCursosComponent, {
      width: '500px',
      data: { id: curso }
    });

    dialogRefInh.afterClosed().subscribe(result => {
      console.log('Recargando tabla');
      this.cursosService.obtenerCursos().subscribe(
        (response: any) => {
          this.cursos = response.data;
          this.dataSource = new MatTableDataSource<any>(this.cursos);
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          console.log(error);
        }
      );

    });

  }

}

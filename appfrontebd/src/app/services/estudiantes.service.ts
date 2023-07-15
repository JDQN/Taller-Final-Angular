import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private apiUrl = environment.apiUrl;

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.token,
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  //Funcion para obtener los estudiantes
  obtenerEstudiantes(): Observable<any> {
    return this.http.get(this.apiUrl + 'estudiantes', this.httpOption);
  }

  //Funcion para registrar el estudiante
  registrarEstudiante(estudiante: any): Observable<any> {
    return this.http.post(this.apiUrl + 'estudiantes', estudiante, this.httpOption);
  }


  //Funcion para consultar el estudiante
  consultarEstudiante(estudiante: number): Observable<any> {
    return this.http.get(this.apiUrl + 'estudiantes/' + estudiante, this.httpOption);
  }

  //Funcion para actualizar el estudiante
  actualizarEstudiante(id: number, estudiante: any): Observable<any> {
    return this.http.put(this.apiUrl + 'estudiantes/' + id, estudiante, this.httpOption);
  }

  //Funcion para inhabilitar el estudiante
  inhabilitarEstudiante(id: number): Observable<any> {
    return this.http.put(this.apiUrl + 'estudiantes/estado' + id, this.httpOption);
  }

}

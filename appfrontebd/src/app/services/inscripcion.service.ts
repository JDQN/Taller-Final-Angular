import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private apiUrl = environment.apiUrl;


  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.token
    })
  }


  constructor(
    private http: HttpClient
  ) { }


  obtenerInscritos(id: number): Observable<any> {
    return this.http.get(this.apiUrl + 'inscripcion/' + id, this.httpOption);
  }


  actualizarInscripcion(id: number, estado: any): Observable<any> {
    return this.http.put(this.apiUrl + 'inscripcion/' + id, estado, this.httpOption);
  }

  inscripcionEstudiante(inscripcion: any): Observable<any> {
    return this.http.post(this.apiUrl + 'inscripcion', inscripcion, this.httpOption);
  }

}
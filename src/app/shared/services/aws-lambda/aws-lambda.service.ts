import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHealthCheck } from 'src/app/domain/healthCheck.model';
import { IDefaultGenericResponse, IDefaultResponse } from 'src/app/domain/defaultResponse.model';


@Injectable({
  providedIn: 'root'
})
export class AwsLambdaService {

  constructor(
    private http: HttpClient
  ) { }

  helthCheckApi(): Observable<IHealthCheck> {
    return this.http.get<IHealthCheck>(environment.URL_API_EXT);
  }

  uploadFile(file: File): Observable<IDefaultResponse> {
    const headers = new HttpHeaders({
      'Content-Type': file.type,
      'filename': file.name     
    });

    return this.http.put<IDefaultResponse>(`${environment.URL_API_EXT}upload`, file, { headers });
  }

  fakeRequest(): Observable<IDefaultGenericResponse<any>> {
    return this.http.get<IDefaultGenericResponse<any>>(`${environment.URL_API_EXT}fake-request`);
  }
}

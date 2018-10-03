import { Tornir } from './../../e2e/TornirModel';
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class TornirServiesService {

  public baseUrl = 'http://localhost:53932/api/tornir/';
  constructor(public httpClinet :HttpClient ) { }

  getAllGame(): Observable<Tornir[]> {
    return this.httpClinet.get<Tornir[]>(this.baseUrl);
  }

  Search(str: string): Observable<Tornir[]> {
    console.log(this.baseUrl);
    console.log('http://localhost:53932/api/tornir/'+str);
    return this.httpClinet.get<Tornir[]>('http://localhost:53932/api/tornir/' + str);
  }

  getIdGame(id: number): Observable<Tornir> {
    return this.httpClinet.get<Tornir>(this.baseUrl + id);
  }

  post(tornir: Tornir): Observable<Response> {
    return this.httpClinet.post<Response>(this.baseUrl, tornir);
  }

  put(id:number, tornir: Tornir): Observable<Response>  {
    var id1=tornir.ID.toString();
    return this.httpClinet.put<Response>(this.baseUrl + id1, tornir);
  }

  delet(id: number): Observable<Response> {
    return this.httpClinet.delete<Response>(this.baseUrl + id);
  }

  
}

import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private url = "Monster";

  constructor(private http:HttpClient) { }

  public getMonsters() : Observable<Monster[]>{
    return this.http.get<Monster[]>(
      `${environment.apiUrl}/${this.url}`);
  }

  public updateMonsters(monster:Monster) : Observable<Monster[]>{
    return this.http.put<Monster[]>(
      `${environment.apiUrl}/${this.url}/${monster.id}`,
      monster);
  }

  public createMonsters(monster:Monster) : Observable<Monster[]>{
    return this.http.post<Monster[]>(`${environment.apiUrl}/${this.url}`,monster);
  }

  public deleteMonsters(monster:Monster) : Observable<Monster[]>{
    return this.http.delete<Monster[]>(`${environment.apiUrl}/${this.url}/${monster.id}`);
  }


}
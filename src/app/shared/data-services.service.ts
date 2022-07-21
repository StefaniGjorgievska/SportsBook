import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private http: HttpClient) { }

  getTree(): Observable<any> {
    return this.http.get("./assets/res/tree.json");
  }
  getLeague(id:any){
    return this.http.get("./assets/res/matches/league_"+id+".json");
  }


}

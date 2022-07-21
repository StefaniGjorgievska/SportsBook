import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterModule, Routes } from '@angular/router';
import { catchError, of, throwError } from 'rxjs';
import { DataServicesService } from '../shared/data-services.service';

@Component({
  selector: 'app-league-grid',
  templateUrl: './league-grid.component.html',
  styleUrls: ['./league-grid.component.less']
})
export class LeagueGridComponent implements OnInit {
  id:any;
  leagueData:any;
  constructor(private route: ActivatedRoute,
              private _router: Router,
              private dataServices: DataServicesService) {
    route.params.subscribe(val => {
      this.id = val['id'];
    });
   }

  ngOnInit(): void {
    this.loadLeague();
  }
  loadLeague(){
    this.dataServices.getLeague(this.id)
    .pipe(
      catchError(err => {
          if(err.status=404){
            this._router.navigate(['**']);
          }
          return throwError(()=>err);
      })
  )
    .subscribe(data => {
      this.leagueData=data;
      this.leagueData=this.leagueData.data;
      console.log(this.leagueData);
    });
  }

}

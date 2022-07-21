import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute, ParamMap, Router, RouterModule, Routes } from '@angular/router';
import { LeagueGridComponent } from '../league-grid/league-grid.component';
import { DataServicesService } from '../shared/data-services.service';

@Component({
  selector: 'app-sportsbook-tree',
  templateUrl: './sportsbook-tree.component.html',
  styleUrls: ['./sportsbook-tree.component.less']
})
export class SportsbookTreeComponent implements OnInit {
  sportsBook:any;
  leagueData:any;
  constructor(private _router: Router, 
              private activatedRoute: ActivatedRoute, 
              private dataServices: DataServicesService) {}
  getTree(){
   this.dataServices.getTree().subscribe(data => {
      this.sportsBook=data.data;
    });
  }
  ngOnInit(): void {
    this.getTree()
  }
  openLeague(id:any){
    this._router.navigate(["league-grid", id], { relativeTo: this.activatedRoute });
  }
  

}

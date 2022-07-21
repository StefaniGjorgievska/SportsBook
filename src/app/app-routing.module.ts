import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueGridComponent } from './league-grid/league-grid.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SportsbookTreeComponent } from './sportsbook-tree/sportsbook-tree.component';

const routes: Routes = [
  { path: '', component: SportsbookTreeComponent, pathMatch: 'full' },
  { path: 'league-grid/:id', component: LeagueGridComponent, pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

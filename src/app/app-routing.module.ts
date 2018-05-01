import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoListComponent } from './info-list/info-list.component';
import { CommodityDetailedComponent } from './commodity-detailed/commodity-detailed.component';
import { NotFundComponent } from './not-fund/not-fund.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { PermissionGuard } from './guard/permission.guard';
import {follow} from './guard/follow.guard';
import {detailedResolve} from './guard/listInfo.resolve';

const appRoutes: Routes = [
  { path: 'commodity', component: InfoListComponent},
  { path: 'header', component: HeaderTopComponent, outlet: 'header',},
  // { path: 'detailed/:id', component: CommodityDetailedComponent, data: [{isPages: false}], canActivate: [PermissionGuard], canDeactivate: [follow]},
  { path: 'detailed', component: CommodityDetailedComponent, data: [{isPages: false}], resolve:{commoditylist:detailedResolve}},
  { path: '',   redirectTo: '/commodity', pathMatch: 'full' },
  { path: '**', component: NotFundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

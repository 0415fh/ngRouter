import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoListComponent } from './info-list/info-list.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { CommodityDetailedComponent } from './commodity-detailed/commodity-detailed.component';
import { NotFundComponent } from './not-fund/not-fund.component';
import { PermissionGuard } from './guard/permission.guard';
import {follow} from './guard/follow.guard';
import {detailedResolve} from './guard/listInfo.resolve';

@NgModule({
  declarations: [
    AppComponent,
    InfoListComponent,
    HeaderTopComponent,
    CommodityDetailedComponent,
    NotFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard, follow, detailedResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }

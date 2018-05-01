import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommodityList } from '../commodity-list';
import { COMMODITYLIST } from '../mock-commodity-list';
@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit {
  commoditylist: CommodityList[]
  constructor(
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.commoditylist = COMMODITYLIST
  }

}

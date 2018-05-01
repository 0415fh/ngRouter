import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CommodityList} from '../commodity-list';
@Component({
  selector: 'app-commodity-detailed',
  templateUrl: './commodity-detailed.component.html',
  styleUrls: ['./commodity-detailed.component.css']
})
export class CommodityDetailedComponent implements OnInit {
  private id: string;
  public isFollow:boolean = false;
  commoditylist:Detailed;
  constructor(
    public routeInfo: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.id = this.routeInfo.snapshot.params['id'];
    console.log(this.isFollow)
    this.routeInfo.data.subscribe((data:{commoditylist:Detailed}) => {
      this.commoditylist = data.commoditylist
    })
  }
  goPage() {
    this.router.navigate(['/stock', 2]);
  }
  follow() {
    return this.isFollow = true;
  }
}


export class Detailed {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public imgUrl: string,
    public describe: string
  ) {}
}

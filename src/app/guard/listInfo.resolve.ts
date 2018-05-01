//注意导入的内容
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {Detailed} from '../commodity-detailed/commodity-detailed.component';

//@Injectable() 使constructor中的依赖注入生效，组件有@Component注解所以不用写@Injectable()

@Injectable()
export class detailedResolve implements Resolve<Detailed>{

  constructor(private router:Router){}

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<Detailed>|Promise<Detailed>|Detailed {
    let id = route.queryParams['id'],
        name = route.queryParams['name'],
        price = route.queryParams['price'],
        imgUrl = route.queryParams['imgUrl'];
    return new Detailed(id, name, price, imgUrl,'ADIDA三葉草2018夏季新款女子运动休闲T恤纯棉短袖CV9888CV9889');
  }
}

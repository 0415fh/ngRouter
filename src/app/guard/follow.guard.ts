import {CanDeactivate} from '@angular/router';
import {CommodityDetailedComponent} from '../commodity-detailed/commodity-detailed.component';

export class follow implements CanDeactivate<CommodityDetailedComponent> {
  canDeactivate(component:CommodityDetailedComponent){
    if(!component.isFollow){
      return window.confirm('不关注吗')
    }else{
      return true;
    }
  }
}

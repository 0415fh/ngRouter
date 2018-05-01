import { CanActivate } from '@angular/router';

export class PermissionGuard implements CanActivate {
  canActivate(){
    var hasPermission:boolean = Math.random() > 0.5;
    if (!hasPermission) {
      console.log('用户无权限访问');
    };
    return hasPermission;
    //返回值true时进入路由
  }
}

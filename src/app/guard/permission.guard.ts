import {CanActivate} from "@angular/router";

export class PermissionGuard implements CanActivate {
  canActivate() {
    let hasPermission: boolean = Math.random() < 0.5;

    if (!hasPermission) {
      console.log(`用户无权访问该页面`);
    }
    return hasPermission;
  }
}

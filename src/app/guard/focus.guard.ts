import {CanDeactivate} from "@angular/router";
import {StockComponent} from "../stock/stock.component";

export class FocusGuard implements CanDeactivate<StockComponent>{
  canDeactivate(component: StockComponent){

    if (component.isFocus()){
      return true;
    }

    return confirm("关注一下再走吧");
  }

}

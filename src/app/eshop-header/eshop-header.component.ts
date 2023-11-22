import { Component } from '@angular/core';
import { faBars, faSearch, faCartShopping  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-eshop-header',
  templateUrl: './eshop-header.component.html',
  styleUrls: ['./eshop-header.component.scss']
})
export class EshopHeaderComponent {
  public isCollapsed = true;
  faScarch = faSearch;
  faBars = faBars;
  faCartShopping = faCartShopping;
}

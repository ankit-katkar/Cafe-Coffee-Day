import { Component, OnInit } from '@angular/core';
import { faSearch, faBell, faCircleUser, faCircle, faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  faScarch = faSearch;
  faBell = faBell;
  faProfile = faCircleUser;
  faCircle = faCircle;
  faXmark = faXmark;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);



  ngOnInit(): void {
    
  }

}


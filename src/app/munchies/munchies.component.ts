import { Component } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-munchies',
  templateUrl: './munchies.component.html',
  styleUrls: ['./munchies.component.scss']
})
export class MunchiesComponent {
  faArrowUp = faArrowUp;

}

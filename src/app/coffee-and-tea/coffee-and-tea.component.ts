import { Component } from '@angular/core';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-coffee-and-tea',
  templateUrl: './coffee-and-tea.component.html',
  styleUrls: ['./coffee-and-tea.component.scss']
})
export class CoffeeAndTeaComponent {
  faArrowUp = faArrowUp;
}

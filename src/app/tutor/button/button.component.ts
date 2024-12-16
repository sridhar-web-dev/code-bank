import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input("size")
  size = ''; // S,M,L
  bg_color = 'W' ; // W, D, Green, NA
}

import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasDirective } from './canvas.directive';

@Component({
  selector: 'app-page02',
  standalone: true,
  imports: [CommonModule, CanvasDirective],
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.scss'],
})
export class Page02Component {
  constructor() {

  }
}

import { Component } from '@angular/core';
import { VideoDirective } from './video.directive';
// import io from 'socket.io-client';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.scss'],
  standalone: true,
  imports: [VideoDirective],
})
export class Page01Component {
  constructor() {
  }
}

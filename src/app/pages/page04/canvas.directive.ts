import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { debounceTime } from 'rxjs';
import { Page04Component } from './page04.component';

@Directive({
  selector: 'canvas',
  standalone: true,
})
export class CanvasDirective {
  video!: HTMLVideoElement;
  constructor(
    public el: ElementRef<HTMLCanvasElement>,
    public renderer2: Renderer2,
    public page: Page04Component
  ) {
    this.video = renderer2.createElement('video');
    this.page.remoteStream$.pipe(debounceTime(100)).subscribe((stream) => {
      if (!!stream) {
        this.video.srcObject = stream;
        this.video.play();
        this.drawVideo();
      }
    });
  }

  drawVideo(): void {
    const ctx = this.el.nativeElement.getContext('2d');
    ctx?.drawImage(
      this.video,
      0,
      0,
      this.el.nativeElement.width,
      this.el.nativeElement.height
    );

    requestAnimationFrame(this.drawVideo.bind(this));
  }
}

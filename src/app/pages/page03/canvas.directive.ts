import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { Page03Component } from './page03.component';

@Directive({
  selector: 'canvas',
  standalone: true,
})
export class CanvasDirective {
  video!: HTMLVideoElement;
  mediaStream!: MediaStream;
  constructor(
    public el: ElementRef<HTMLCanvasElement>,
    public renderer2: Renderer2,
    public page: Page03Component
  ) {
    this.video = renderer2.createElement('video');
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        this.mediaStream = this.video.srcObject = stream;
        this.video.play();
        this.drawVideo();
        // this.createConnection();

        stream.getTracks().forEach((track) => {
          this.page.pc.addTrack(track, stream);
        });
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

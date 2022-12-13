import { Directive, ElementRef, Renderer2 } from '@angular/core';
import io, { Socket } from 'socket.io-client';

@Directive({
  selector: 'canvas',
  standalone: true,
})
export class VideoDirective {
  video!: HTMLVideoElement;
  constructor(public el: ElementRef<HTMLCanvasElement>, renderer2: Renderer2) {
    const socket = io('wss://192.168.3.135:3001');

    // const context = el.nativeElement.getContext('2d');

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        const video = (this.video = renderer2.createElement(
          'video'
        ) as HTMLVideoElement);
        video.srcObject = stream;
        this.drawImage(socket);
        video.play();

        // const image = context?.getImageData(0,0,el.nativeElement.width, el.nativeElement.height).data.to
      });
  }

  drawImage(socket: Socket) {
    const context = this.el.nativeElement.getContext('2d');
    context?.drawImage(
      this.video,
      0,
      0,
      this.el.nativeElement.width,
      this.el.nativeElement.height
    );
    window.requestIdleCallback(this.drawImage.bind(this, socket));
    socket.emit('data', this.el.nativeElement.toDataURL('images/png', 0.5));
  }
}

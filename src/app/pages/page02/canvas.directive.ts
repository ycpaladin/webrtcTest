import { Directive, ElementRef, Renderer2 } from '@angular/core';
import io from 'socket.io-client';
@Directive({
  selector: 'canvas',
  standalone: true,
})
export class CanvasDirective {
  constructor(public el: ElementRef<HTMLCanvasElement>, renderer2: Renderer2) {
    const socket = io('wss://192.168.3.135:3001');
    // const contxt = el.nativeElement.
    const canvas = el.nativeElement;
    const context = canvas.getContext('2d');
    const image = renderer2.createElement('image') as HTMLImageElement;

    socket.on('data', (data) => {
      // console.log(data);
      // context?.drawImage(
      //   data,
      //   0,
      //   0,
      //   this.el.nativeElement.width,
      //   this.el.nativeElement.height
      // );
      // const d = new ArrayBuffer();
      image.src = data;
      context?.drawImage(
        image,
        0,
        0,
        this.el.nativeElement.width,
        this.el.nativeElement.height
      );
    });
  }
}

import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasDirective } from './canvas.directive';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-page04',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CanvasDirective,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
  ],
  templateUrl: './page04.component.html',
  styleUrls: ['./page04.component.scss'],
})
export class Page04Component {
  pc = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.voipbuster.com ' }],
  });
  offerSdp!: string;
  answerSdp!: string;

  remoteStream$ = new Subject<MediaStream>();
  constructor() {
    this.pc.onicecandidate = async (event) => {
      if (event.candidate) {
        this.answerSdp = JSON.stringify(this.pc.localDescription);
      }
    };

    this.pc.ontrack = (event) => {
      if (event.streams.length) {
        this.remoteStream$.next(event.streams[0]);
      }
    };
  }

  async createAnswer(): Promise<void> {
    const offer = JSON.parse(this.offerSdp);
    await this.pc.setRemoteDescription(offer);
    const answer = await this.pc.createAnswer();
    await this.pc.setLocalDescription(answer);
  }
}

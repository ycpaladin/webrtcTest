import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CanvasDirective } from './canvas.directive';

@Component({
  selector: 'app-page03',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CanvasDirective,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
  ],
  templateUrl: './page03.component.html',
  styleUrls: ['./page03.component.scss'],
})
export class Page03Component {
  pc = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.voipbuster.com ' }],
  });
  offerSdp!: string;
  answerSdp!: string;
  constructor() {
    this.pc.onicecandidate = async (event) => {
      this.offerSdp = JSON.stringify(this.pc.localDescription);
    };
  }

  async createConnection(): Promise<void> {
    const offer = await this.pc.createOffer();
    this.pc.setLocalDescription(offer);
  }

  answerSdpChange(value: string) {
    this.pc.setRemoteDescription(JSON.parse(value));
  }
}

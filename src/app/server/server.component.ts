import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: yellow;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  GetServerStatus() {
    return this.serverStatus;
  }
  GetColor() {
    return this.serverStatus == 'online' ? 'lightblue' : 'lightcoral';
  }
}

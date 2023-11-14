import { getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    `
      .line {
        background-color: blue;
      }
    `,
  ],
})
export class ServersComponent {
  displayDetails = false;
  allowNewServer = false;
  buttonText: string = ' Display Details ';
  serverCreated = false;
  numerOfConectedServers: number = 0;

  numerOfDetailsShowed = [];
  paragraphsDetails = 'Paragraph number  ' + this.numerOfDetailsShowed.length;
  numerOfDetails: number = this.numerOfDetailsShowed.length;
  serverCreationStatus = 'No server was created! ';
  serverName = '';
  userName = '';
  servers = ['Ierusalim', 'LaPlata'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  ChangeServerCreationStatus() {
    if (this.serverName == '') {
      alert('Fill server name first !');
      return;
    }
    this.serverCreated = true;
    this.numerOfConectedServers++;
    this.serverCreationStatus = ` ${this.serverName}  was created`;
    this.servers.push(this.serverName);
    setTimeout(() => {
      this.serverName = '';
      this.serverCreationStatus = `${this.numerOfConectedServers}  ${
        this.numerOfConectedServers > 1 ? 'servers' : 'server'
      } was created`;
    }, 2000);
    if (this.numerOfConectedServers == 0)
      this.serverCreationStatus = 'No server was created!';
  }
  WriteDownServerName(event: Event) {
    var value = (<HTMLInputElement>event.target).value;
    if (value != '') this.serverName = value;
  }
  DispyayDetailsParagraph() {
    let details = this.displayDetails;
    details = this.buttonText == ' Display Details ' ? true : false;
    this.displayDetails = details;
    if (details) {
      this.numerOfDetailsShowed.push(this.GetNumber());
      this.numerOfDetails = this.numerOfDetailsShowed.length;
      this.paragraphsDetails =
        'Paragraph number  ' + this.numerOfDetailsShowed.length;
      this.buttonText = ' Hide Details ';
    } else this.buttonText = ' Display Details ';
  }
  GetNumber() {
    if (!this.numerOfDetailsShowed.length) return 0;
    return this.numerOfDetailsShowed[this.numerOfDetailsShowed.length - 1] + 1;
  }
}

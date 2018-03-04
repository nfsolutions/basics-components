import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'no server was created';
  serverName: string = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  onServerCreation() {
    this.serverCreationStatus = 'server was created, name is ' + this.serverName;
  }

  ngOnInit() {

  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverId = 10;
  serverStatus = 'offline';
  serverName='TestServer';
  serverCreated = false;
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Was Created';
  }

  onUpdateServerName(event : any){
    this.serverName = event.target.value;
    
  }
}

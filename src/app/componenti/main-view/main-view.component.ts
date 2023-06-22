import { Component } from '@angular/core';
import { MqttService } from 'ngx-mqtt';
import { MqttHandlerService } from 'src/app/services/mqtt-handler.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})

export class MainViewComponent {
  constructor(private mqttHandler: MqttHandlerService) { }
  
  sendMessage(topic: string, message: string): void {  
    this.mqttHandler.sendMessage(topic, message);
  }
}

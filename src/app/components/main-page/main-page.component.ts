import { Component } from '@angular/core';
import { MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  constructor(private mqttService: MqttService) { }

  sendMessage(topic: string, message: string): void {  
    this.mqttService.publish(topic, message).subscribe({
      complete: () => {
        console.log('Message published to MQTT broker');
      },
      error: (error: Error) => {
        console.error('Failed to publish message:', error);
      }
    });
  }
}

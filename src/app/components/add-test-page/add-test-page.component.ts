import { Component, Input } from '@angular/core';
import { MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-add-test-page',
  templateUrl: './add-test-page.component.html',
  styleUrls: ['./add-test-page.component.css']
})

export class AddTestPageComponent {
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

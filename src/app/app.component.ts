import { Component } from '@angular/core';
import {
  IMqttMessage,
  IMqttServiceOptions,
  MqttService,
  IPublishOptions,
 } from 'ngx-mqtt';
 import { IClientSubscribeOptions } from 'mqtt-browser';
 import { Subscription } from 'rxjs';
 import { MqttHandlerService } from './services/mqtt-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'collaudo_wireless';
}





import { Component, OnInit } from '@angular/core';
import {
  IMqttMessage,
  IMqttServiceOptions,
  MqttService,
  IPublishOptions,
} from 'ngx-mqtt';
import { Injectable } from '@angular/core';
import { IClientSubscribeOptions } from 'mqtt-browser';
import { Subscription, Subject } from 'rxjs';

interface JsonComputer {
  pc_name: string;
  ip_address: string;
}

// const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
//   hostname: 'localhost',
//   port: 9001,
//   protocol: 'ws',
//   path: '/mqtt',
// };

@Injectable({
  providedIn: 'root'
})

export class MqttHandlerService implements OnInit{
  constructor(public mqttService: MqttService) {
  }
  receivedTopic!: string;
  receivedMessage!: string;
  public online_pcs: any[] = []
  public pc_info: any[] = []
  public json_computer: JsonComputer = {pc_name: "", ip_address: ""};
  public receiveNews = '';

  private curSubscription: Subscription | undefined;
  connection = {
    hostname: 'localhost',
    port: 9001,
    path: '/mqtt',
    clean: true,
    connectTimeout: 4000, 
    reconnectPeriod: 4000, 
    clientId: 'web',
    protocol: 'ws',
    }

  subscription = {
    topic: 'collaudo/ip_address',
    qos: 0,
  };
  publish = {
    topic: 'collaudo/scan_pc',
    qos: 0,
    payload: 'ON',
  };


  ngOnInit() {
    this.createConnection();
    this.doSubscribe();
    this.subscribeToTopic("collaudo/ip_address");
  }

  // "collaudo/ip_address"
  subscribeToTopic(topic: string): void {
    this.mqttService.observe(topic).subscribe((message: IMqttMessage) => {
    });
  }

  createConnection() {
    try {
      this.mqttService?.connect(this.connection as IMqttServiceOptions)
    } catch (error) {
      console.log('mqtt.connect error', error);
    }

    this.mqttService.onConnect.subscribe(() => {
      console.log('Connection succeeded!');
    });

    this.mqttService.onMessage.subscribe((packet: any) => {
      this.receivedMessage = packet.payload.toString();
      console.log(this.receivedMessage);
      // if (packet.topic == "collaudo/ip_address"){
      //   this.pc_info = [];
      //   this.json_computer = JSON.parse(this.receivedMessage);
      //   this.pc_info.push(this.json_computer.pc_name, this.json_computer.ip_address);

      //   this.online_pcs.push(this.pc_info);
      // }   
    });
  }

  doSubscribe() {
    var subject = new Subject<string>();
    const { topic, qos } = this.subscription
    this.curSubscription = this.mqttService.observe(topic, { qos } as IClientSubscribeOptions).subscribe((message: IMqttMessage) => {
      console.log('Subscribe to topics res', message.payload.toString())
      subject.next(message.payload.toString())
      subject.complete();
    })
    return subject;
  }

  doPublish() {
    const { topic, qos, payload } = this.publish
    console.log(this.publish)
    this.mqttService.unsafePublish(topic, payload, { qos } as IPublishOptions)
  }

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

import { Component, OnInit } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { MqttHandlerService } from 'src/app/services/mqtt-handler.service';
import { AvailablePcsService } from 'src/app/services/avilable-pcs-crud.service';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

interface JsonComputer {
  pc_name: string;
  ip_address: string;
}

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css'],
})

export class AddTestComponent implements OnInit{
  public available_pcs: any;
  public online_pcs: any[] = [];
  public receiveNews: any;
  public pc_info: any[] = []
  public json_computer: JsonComputer = {pc_name: "", ip_address: ""};

  constructor(private mqttHandler: MqttHandlerService, private servizioAvailablePcs: AvailablePcsService) {
    this.servizioAvailablePcs.getAvailablePcs()
    .subscribe(data => {
      this.available_pcs = data
    })
  }

  ngOnInit() {
    // this.mqttHandler.subscribeToTopic("collaudo/ip_address");
    this.updateData();    
  }

  updateData(){
    this.pc_info = [];
    this.online_pcs = [];

    //send message
    this.sendMessage('collaudo/scan_pc', 'ON');

    this.receiveNews = this.mqttHandler.doSubscribe().subscribe(res =>{

      console.log(res);
      this.receiveNews = res;
      this.json_computer = JSON.parse(res);
      
      // (<Array<any>>this.available_pcs).find(x => x.pc_name == this.json_computer.pc_name).ip_address = this.json_computer.ip_address;   
      // console.log(this.json_computer );
      
      // this.available_pcs.forEach((element: any) => {
      //   if (element.pc_name == this.json_computer.pc_name){
      //     this.servizioAvailablePcs.editAvailablePcs(element.id, {ip_address: this.json_computer.ip_address, state: true})
      //       .subscribe(data => {
      //         }); 
      //   }        
      // });

      // if ((<Array<any>>this.available_pcs).find(x => x.pc_name == this.json_computer.pc_name) != undefined){
      //   this.servizioAvailablePcs.editAvailablePcs(); 
      // }

      this.pc_info[0] = this.json_computer.pc_name;
      this.pc_info[1] = this.json_computer.ip_address;
      if (this.online_pcs.find(x => x[0] == this.pc_info[0] ) == undefined){
        this.online_pcs.push(this.pc_info);
      }
      
    });

    setTimeout(() => {
      this.updateData();
    }, 5000);
  }



  sendMessage(topic: string, message: string){
    this.mqttHandler.sendMessage(topic, message);
  }
}



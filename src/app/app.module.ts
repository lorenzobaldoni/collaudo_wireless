import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MqttModule, IMqttServiceOptions } from 'ngx-mqtt';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddTestPageComponent } from './components/add-test-page/add-test-page.component';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '192.168.1.162',
  port: 9001,
  protocol: 'ws',
  path: '/mqtt',
};

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddTestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

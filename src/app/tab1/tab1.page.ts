import { Component } from '@angular/core';
import {NavController} from "@ionic/angular";
import {ProvidersService} from "../providers.service";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  constructor(public navCtrl: NavController, private message: ProvidersService, private  http: HttpClient){
    this.getMotos();
    console.log("Private HTTP")
  }
  listData=[];
  data=false;
  getMotos(){
    this.http.get('http://localhost:3000/list').subscribe((response) => {
      this.listData=response.data;
    });

  }
  addInput() {
      this.data=true;
  }
  cancelAdd() {
    this.data=false;
  }


}

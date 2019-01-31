import {Component} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ProvidersService} from "../providers.service";
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
    private url: string = "http://localhost:3000/list";
    private urlPost: string = "http://localhost:3000/add";

    constructor(public navCtrl: NavController, private message: ProvidersService, private  http: HttpClient) {
        this.getMotos();

    }

    listData = [];
    data = false;

    getMotos() {
        this.http.get(this.url).subscribe((response) => {
            this.listData = response.data;
        });
    }

    addInput() {
        this.data = true;
    }

    cancelAdd() {
        this.data = false;
    }

    sendPost() {
        let form = new FormData(document.querySelector('#form'));
        let nombre = form.get('nombre'),
            modelo = form.get('modelo'),
            cilindrada = form.get('cilindrada'),
            color = form.get('color'),
            precio = form.get('precio');
        let jsonData = {
            "nombre": nombre,
            "modelo": modelo,
            "cilindrada": cilindrada,
            "color": color,
            "precio": precio,
        };
        this.http.post(this.urlPost, jsonData, {})
            .subscribe(data => {
                this.data = false;
                location.reload();
                console.log(data);
            }, error => {
                console.log(error);
            });
    }


}

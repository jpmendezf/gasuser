import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-ostatus',
  templateUrl: './ostatus.page.html',
  styleUrls: ['./ostatus.page.scss'],
})
export class OstatusPage implements OnInit {
  oid: string;
  OStatus: string;
  status: string;

  uname: any;
  osid: any;
  ouid: any;
  ouname: any;
  oumobile: any;
  ouaddress: any;
  oubrand: any;
  ouweight: any;
  ogasprice: any;
  otransport: any;
  ohfee: any;
  ototal: any;
  olat: any;
  olng: any;
  ostatus: any;
  interval: any;
  ostatusNew: any;
  isOrder: any;
  distance: any;
  ShopAddress: any;
  ShopName: any;
  ShopMobile: any;

  constructor(public toastController: ToastController,private http: HttpClient,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.OStatus ="Pending"

  }

  ionViewDidLeave(){

  }

  GetOrderDetails(){


  }

  chkOrder(){
    
  }


  cancelOrder(){
    this.router.navigate(['/home']);

  }


}

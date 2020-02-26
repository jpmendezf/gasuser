import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-orderone',
  templateUrl: './orderone.page.html',
  styleUrls: ['./orderone.page.scss'],
})
export class OrderonePage implements OnInit {
  uaddress: string;
  uid: string;
  uname: string;
  umobile: string;
  ulat: string;
  ulong: string;
  brand: any;
  weight: any;
  NewAddress: string;

  constructor(private nativeGeocoder: NativeGeocoder,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {

  }


  searchShop(){
    this.router.navigate(['/ordertwo']);
  }

}

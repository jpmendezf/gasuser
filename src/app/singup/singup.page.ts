import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  mobile: string;

  Address1: string;
  Address2: string;
  Address3: string;
  Name: any;
  uid: any;

  constructor(private menuCtrl:MenuController,private navCtrl: NavController,private storage: Storage,private activatedRoute: ActivatedRoute,public toastController: ToastController,private http: HttpClient,private router: Router) { }

  ngOnInit() {

   

  }

  ionViewWillEnter() {
    
    //disable sidebar menu in signup page
    this.menuCtrl.enable(false);
  }


  saveData() {

    // ***** write your signup data insert method ****//
    this.navCtrl.navigateRoot(['/login']);
  }

}

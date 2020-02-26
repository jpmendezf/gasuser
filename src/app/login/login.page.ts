import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NavController } from '@ionic/angular';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  newMobile: any;
  uid: any;
  Apiurl = 'http://13.235.39.216/api/gasuser.php';

  constructor(private statusBar: StatusBar,private http: HttpClient,private navCtrl: NavController,private locationAccuracy: LocationAccuracy,private androidPermissions: AndroidPermissions,private router: Router,private storage: Storage) { }

  ngOnInit() {

    this.checkGPSPermission();
    this.statusBar.backgroundColorByHexString('#929496');


  }
  

  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        //this.chkloginStatus()
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  chkloginStatus(){

    //******* CHECK USER PREVIOUSE LOGIN OR NOT */

    // this.storage.get('uid').then((val) => {
    //   this.uid =val;
  
    //   if(this.uid){
  
    //     this.navCtrl.navigateRoot(['/home']);
  
    //   }else{

    //     this.navCtrl.navigateRoot(['/singup',this.newMobile]);
  
    //   }
  
    //   });

  }

  chkLogin(){
    this.navCtrl.navigateRoot(['/home']);
  }
  

  goSignup(){
    this.navCtrl.navigateRoot(['/singup']);

  }

}
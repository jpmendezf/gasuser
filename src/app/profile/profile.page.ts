import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  uid: string;
  mobile: any;
  address: any;
  name: any;

  Apiurl = 'http://13.235.39.216/api/gasuser.php';

  constructor(private http: HttpClient,private storage: Storage) { }

  ngOnInit() {

    this.name = "Andrew";
    this.address = "No99 Newcity";
    this.mobile = 2548795;

  }


}

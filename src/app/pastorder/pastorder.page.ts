import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.page.html',
  styleUrls: ['./pastorder.page.scss'],
})
export class PastorderPage implements OnInit {


  constructor(private storage: Storage,private http: HttpClient,private router: Router) { }

  ngOnInit() {

  }

}

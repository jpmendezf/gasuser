import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-ordertwo',
  templateUrl: './ordertwo.page.html',
  styleUrls: ['./ordertwo.page.scss'],
})
export class OrdertwoPage implements OnInit {
  chkresult: string;


  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {

  }

  getAvbShop(){
    this.chkresult = "yes"; //nodata
  }

  

  orderSend() {
    this.router.navigate(['/ostatus']);
  }

}

import { Component, OnInit } from '@angular/core';
import {InformacionService} from  '../../services/informacion.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _is:InformacionService) {

   }

  ngOnInit() {
  }

}

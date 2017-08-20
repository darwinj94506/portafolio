import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(parametros=>{
      console.log(parametros['id']);
    });
 }

  ngOnInit() {
  }

}

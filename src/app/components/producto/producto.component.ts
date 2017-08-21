import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../services/productos.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto:any=undefined;
  cod:string=undefined;

  constructor(private route:ActivatedRoute, private _ps:ProductosService) {
    route.params.subscribe(parametros=>{

      _ps.cargar_producto(parametros['id'])
          .subscribe(res=>{
            this.cod=parametros['id'];
            this.producto=res.json();
          })

    });
 }

  ngOnInit() {
  }

}

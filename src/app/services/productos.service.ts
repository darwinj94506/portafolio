import { Injectable } from '@angular/core';
import{Http} from "@angular/http";
@Injectable()
export class ProductosService {

  productos:any[]=[];
  cargando_productos:boolean=false;
  constructor(private http:Http) {
    this.cargar_productos();
  }

public cargar_producto(codigo:string){
  return this.http.get(`https://gag-86cba.firebaseio.com/productos/${codigo}.json`)
}


  public cargar_productos(){
      this.cargando_productos=true;
      this.http.get("https://gag-86cba.firebaseio.com/productos_idx.json").subscribe(res=>{
        console.log(res.json());
        this.cargando_productos=false;
        this.productos=res.json();
      });


  }

}

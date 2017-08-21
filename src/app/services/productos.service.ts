import { Injectable } from '@angular/core';
import{Http} from "@angular/http";
@Injectable()
export class ProductosService {

  productos:any[]=[];
  productos_filtrado:any[]=[];

  cargando_productos:boolean=false;
  constructor(private http:Http) {
    this.cargar_productos();
  }

public cargar_producto(codigo:string){
  return this.http.get(`https://gag-86cba.firebaseio.com/productos/${codigo}.json`)
}

public buscar_producto(termino:string){
  if(this.productos.length===0){
    this.cargar_productos().then(()=>{
      //termino la cargar_productos
      this.filtrar_productos(termino);
    });
  }else{
    this.filtrar_productos(termino);
  }
  console.log("buscando producto...");

}

private filtrar_productos(termino:string){
  this.productos_filtrado=[];
  termino=termino.toLowerCase();
  this.productos.forEach(prod=>{
    if(prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0){
      this.productos_filtrado.push(prod);
    }
    console.log(prod);
  })
}


  public cargar_productos(){
      this.cargando_productos=true;

      let promesa=new Promise((resolve,reject)=>{
        this.http.get("https://gag-86cba.firebaseio.com/productos_idx.json")
        .subscribe(res=>{
          console.log(res.json());
          this.cargando_productos=false;
          this.productos=res.json();
          resolve();
        });
      });
      return promesa;



  }

}

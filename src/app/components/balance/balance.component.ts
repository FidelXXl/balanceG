import { Component } from '@angular/core';
import { Balance } from './Balance';
import { Balance2 } from './Balance';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
  listabal1: Balance[] = [];
  listabal2: Balance2[] = [];
  Activos = '';
  Pasivos = " ";
  Activos2: string = " ";
  Pasivos2: string = " ";
  quiero: string = " ";
  cantidad1 : number =0;
  cantidad2 : number = 0;
  cantidad3 : string = " ";
  cantidad4 : string = " ";
  total1: number = 0;
  balances1 = '';
  balance2 = '';
  contener =0;
  tipos = '';

 debhab: string[] = ['Activo','Pasivo','Capital'];

 tipo: string[] = ['Circulante','Fijo'];

constructor()
{

}


ngOnInit(): void {

}

sumadosv(): void
{
  this.contener = this.cantidad1 + this.contener
  this.total1 =this.contener;
}

agregarBalance():void
{
  //console.log(this.nombreTarea);
  //creamos el objeto de tipo tareas
  const balance: Balance={
  nombre: this.balances1,
  id : this.Activos,
  estado: false,
  cantidad : this.cantidad1,
  tipos : this.tipos,
  
  
  }
  this.listabal1.push(balance)
  this.balances1='';
}

agregarBalance2():void
{
  //console.log(this.nombreTarea);
  //creamos el objeto de tipo tareas
  const balance2: Balance2={
  nombre: this.balance2,
  estado: false
  }
  this.listabal2.push(balance2)
  this.balance2='';
}

}

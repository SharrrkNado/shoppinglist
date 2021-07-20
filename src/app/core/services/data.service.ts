import { Injectable } from '@angular/core';


export interface IItem{
  id:number;
  name:string;
  price:number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public items:IItem[] = [];

  constructor() { }

  mockdata = [
    { id:1, name:"Oliven", price:0.99 },
    { id:2, name:"Nudeln", price:1.99 },
    { id:3, name:"Soße", price:0.79 },
    { id:1, name:"Oliven", price:0.99 },
    { id:2, name:"Nudeln", price:1.99 },
    { id:3, name:"Soße", price:0.79 }
  ]

  ngOnInit(){
    this.items = this.mockdata;
  }

  getItems(){
    return this.items;
  }

  addItem(item:IItem){
    item.id = this.items.length;
    this.items.push(item)
  }
}

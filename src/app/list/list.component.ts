import { Component, OnInit } from '@angular/core';
import { DataService, IItem } from '../core/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public items:IItem[] | null = null;

  public newItemName:string|null = null;
  public newItemPrice:number|null = null;

  constructor(private dataService:DataService) { 
  }


  ngOnInit(): void {
    this.items = this.dataService.getItems();
  }
  addItem(){
    if(this.newItemName && this.newItemPrice){
      let newItem:IItem = {
        id:-1,
        name:this.newItemName,
        price: this.newItemPrice
      }
      this.dataService.addItem(newItem);
      this.items = this.dataService.getItems();
      this.newItemName = null;
      this.newItemPrice= null;
      console.log(this.items);
    }
  }
}

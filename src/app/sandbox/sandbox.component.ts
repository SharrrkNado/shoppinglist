import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  public countRows = 3;
  public countCols = 2;

  public lastUpdate = "";
  
  public arr:string[][] = [];
  constructor() { }

  ngOnInit(): void {
    for(let r = 0; r<this.countRows; r++){
      const row:string[] = [];
      for(let c = 0; c<this.countCols; c++){
        row.push(`${r}/${c}`);
      }
      this.arr.push(row)
    }
    console.table(this.arr)
  }

  // setValueAt(row:number,col:number, val:any){
  //   this.lastUpdate = `${row},${col}:${val.target.value}`;
  //   return this.arr[row][col] = val.target.value;

  // }

  // getValueAt(row:number,col:number){
  //   return this.arr[row][col];
  // }
}

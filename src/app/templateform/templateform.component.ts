import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {

  @ViewChild('formB') formB!:NgForm;
  @ViewChild('formF') formF!:NgForm;

  public textValueC = "predefilled via template";

  constructor() { }

  ngOnInit(): void {
  }
 

  onSubmitA(form: NgForm){
    console.log(form)
  }
  onSubmitB(){
    console.log(this.formB)
  }

  onSubmitC(){
    console.log(this.textValueC);
  }
  onSubmitD(form: NgForm){
    console.log(form)
  }

  setValuesFormF(){
    this.formF.form.setValue({
      textFa:"textFa",
      textFb:"textFb"
    })
  }
  patchFormF(){
    this.formF.form.patchValue({
      textFa:"patch textFa"
    })
  }
  resetFormF(){
    this.formF.resetForm();
  }
}

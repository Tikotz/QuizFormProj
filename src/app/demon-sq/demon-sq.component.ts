import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demon-sq',
  templateUrl: './demon-sq.component.html',
  styleUrls: ['./demon-sq.component.css']
})
export class DemonSQComponent implements OnInit {

  showForm:boolean = false;
  showResult:boolean = true;
  readonly Result_key = 'quiz result';

  formData: any = {};
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getFormValues(data:NgForm){
    this.formData = data;
    if(this.formData["Q1MainCharacter"] === "Tanjiro Kamado"){
      this.counter += 10;
    }
    if(this.formData["Q2MainCharacter"] === "Muzan Kibutsuji"){
      this.counter += 10;
    }
    if(this.formData["Q3MainCharacter"] === "Tengen Uzui"){
      this.counter += 10;
    }
    
    this.showForm = true;
    this.showResult = false;
  }

  handleSave(){
    localStorage.setItem(this.Result_key,JSON.stringify(this.formData));
  }

  

}

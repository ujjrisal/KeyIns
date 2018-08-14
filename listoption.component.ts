import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listoption',
  templateUrl: './listoption.component.html',
  styleUrls: ['./listoption.component.css']
})
export class ListoptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
 private selectedLink: string;       
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }  

}

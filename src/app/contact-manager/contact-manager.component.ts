import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContacts';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  
 allContacts:MyContact[]=[]
 searchKey:string=''
  constructor( private api:ApiService){

  }
  ngOnInit(): void {
    this.getAllContact()
    
  }
  // to get all contact
  getAllContact(){
    this.api.getAllContacts().subscribe((data:any)=>{
      console.log(data);
      this.allContacts=data
      
    })
  }
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    

  }

  deleteContact(contactId:any){
    this.api.deleteContact(contactId)
    .subscribe((data:any)=>{
      this.getAllContact()

    })

  }

}

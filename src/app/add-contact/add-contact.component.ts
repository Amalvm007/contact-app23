import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContacts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent  implements OnInit{
  groupName:any []=[]
  contactName:string=''
  contact:MyContact ={}
  constructor( private api:ApiService , private route:Router){

  }
  ngOnInit(): void {
    this.api.getAllGroups()
    .subscribe((data:any)=>{
      console.log(data);
      this.groupName=data
      
    })
    
  }
  addContact(){
    this.api.addContact(this.contact)
    .subscribe((data:any)=>{

      setTimeout(() => {
        alert('New Contact is Added')
        this.route.navigateByUrl('')
      }, 1000);
      
    })
  }
}

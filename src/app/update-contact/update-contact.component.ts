import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContacts';
import { MyGroups } from 'src/models/myGroups';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent  implements OnInit{
  contactId:string=''
  contact:MyContact ={} as MyContact
  groups:MyGroups[] =[] as MyGroups[]

  constructor( private activatedRoute:ActivatedRoute , private api:ApiService , private router:Router){

  }
  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((data:any)=>{
      console.log(data['contactId']);
      
      this.contactId=data['contactId']
    })

    // api call for particular contact
    this.api.viewContact(this.contactId)
    .subscribe((data:any)=>{
      this.contact=data
      console.log( this.contact);
      
    })

    // api call for get all groups
    this.api.getAllGroups()
    .subscribe((data:any)=>{
      this.groups=data

    })
    
  }
  // updateContact
  updateContact(){
    this.api.updateContact(this.contactId,this.contact).subscribe(
      (data:any)=>{
        this.router.navigateByUrl('')

      }
    )
  }

}

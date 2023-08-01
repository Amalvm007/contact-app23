import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { MyContact } from 'src/models/myContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  baseUrl:string='http://localhost:3000/contacts'
  contactId: any;

  constructor( private http:HttpClient ) { 

  }
  ngOnInit(): void {
    
  }

  // api call get all contact
  getAllContacts():Observable<MyContact>{
    return this.http.get(this.baseUrl)
  }

  // api call for view contact
  viewContact(contactId:string){
   return  this.http.get(`${this.baseUrl}/${contactId}`)

  }

  // api call for partcular groupId
  getGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groupId/'+groupId)
  }

  // api call for get all groups
  getAllGroups(){
   return  this.http.get('http://localhost:3000/groupId')
  }

  // api call for add new user
  addContact(contactBody:any){
    return this.http.post(this.baseUrl,contactBody)
  }

  // api call for delete an contact
  deleteContact(contactId:any){
    return this.http.delete(`${this.baseUrl}/${contactId}`)


  }

  // api call for update an contact
  updateContact(contactId:any,contactBody:any){
   return  this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  // redirect  to localhost:4200
  {
    path:'',redirectTo:'contacts/admin',pathMatch:'full'
  },

  // path for  ContactManagerComponent
  {
    path:'contacts/admin',component:ContactManagerComponent
  },
  // path for viewContact
  {
    path:'contacts/view/:contactId',component:ViewContactComponent
  },
  // path for add contact
  {
    path:'contacts/add',component:AddContactComponent
  },
  // path for update contact
  {
    path:'contacts/update/:contactId',component:UpdateContactComponent
  },
  // PageNotFoundComponent
  {
    path:'**',component:PageNotFoundComponent
    
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

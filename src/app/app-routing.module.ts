import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { CustomersComponent } from './customers/customers.component';
import { FamiliesComponent } from './families/families.component';

const routes: Routes = [
{
	path:'',
	component:HomeComponent
},
{
	path:'address-form',
	component: AddressFormComponent
},
{
	path:'customers',
	component: CustomersComponent
},
{
	path:'families',
	component: FamiliesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

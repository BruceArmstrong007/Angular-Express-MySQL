import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor/vendor.component';
import { ErrComponent } from './err/err.component';
const routes: Routes = [
{
path: 'vendor-edit/:id',
component:VendorComponent
},
{
  path: 'vendor-delete',
  component:VendorComponent
},
{
    path: 'vendor-create',
    component:VendorComponent
},
{
  path: '',
  component:VendorComponent
},
{
  path: '*',
  component:ErrComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

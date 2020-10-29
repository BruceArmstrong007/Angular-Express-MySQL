import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorComponent } from './vendor/vendor.component';
import { ErrComponent } from './err/err.component';
import { CreateComponent } from './vendor/create/create.component';
import { EditComponent } from './vendor/edit/edit.component';
import { DisplayComponent } from './vendor/display/display.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import{FormsModule,ReactiveFormsModule} from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateService } from './vendor/create/create.service';
import { EditService } from './vendor/edit/edit.service';
import { DisplayService } from './vendor/display/display.service';

@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    ErrComponent,
    CreateComponent,
    EditComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CreateService,EditService,DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

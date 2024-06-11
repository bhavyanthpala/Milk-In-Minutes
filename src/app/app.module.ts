import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { OrdersComponent } from './orders/orders.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LogInComponent } from './log-in/log-in.component';
import { OrderRequestComponent } from './order-request/order-request.component';
import {MatTableModule} from '@angular/material/table';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderLoginComponent } from './order-login/order-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    NavBarComponent,
    OrdersComponent,
    LogInComponent,
    OrderRequestComponent,
    NotFoundComponent,
    OrderLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

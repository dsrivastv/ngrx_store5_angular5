import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {Ng2MultiStepFormRoutingModule} from './app-routing.module';
import {UserComponent} from './forms/user/user.component';
import {SummaryComponent} from './forms/summary/summary.component';
import {HealthComponent} from './forms/health/health.component';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { user, UserService } from './state/user';
import { health, HealthService } from './state/health';
import { RemoteService} from './state/remote';
import { ResultComponent } from './result/result.component';
import { CapitalizePipe } from './forms/summary/capitalize.pipe';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, UserComponent, HealthComponent, SummaryComponent, ResultComponent, CapitalizePipe
  ],
  imports: [
    BrowserModule, MatToolbarModule, Ng2MultiStepFormRoutingModule,
    MatCardModule, MatInputModule, ReactiveFormsModule, StoreModule.forRoot({user, health}),
    MatRadioModule, MatCheckboxModule, MatDialogModule
  ],
  providers: [UserService, HealthService, RemoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

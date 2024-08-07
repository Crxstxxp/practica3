import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';

@NgModule({
  declarations: [AppComponent, PhotoModalComponent],
  imports: [ReactiveFormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
     AngularFireModule.initializeApp(environment.firebaseConfig)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
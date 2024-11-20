import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/reducers/auth.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, // Declare components here
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({ auth: authReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}

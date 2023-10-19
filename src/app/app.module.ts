import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { BoxsComponent } from './components/boxs/boxs.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent,
    BoxsComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

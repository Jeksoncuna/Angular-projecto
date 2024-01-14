import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TittleComponent } from './tittle/tittle.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BodyBarComponent } from './body-bar/body-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TittleComponent,
    MenuBarComponent,
    BodyBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

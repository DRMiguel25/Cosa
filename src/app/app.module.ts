import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Lista_De_Productos/Lista_De_Productos.component';
import { MomentPipe } from './moment.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Añade esta línea
})
export class AppModule { }
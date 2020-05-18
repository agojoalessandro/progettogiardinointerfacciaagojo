import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltezzaComponent } from './altezza/altezza.component';
import { ColoreComponent } from './colore/colore.component';
import { PeriodoFiorituraComponent } from './periodo-fioritura/periodo-fioritura.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    AltezzaComponent,
    ColoreComponent,
    PeriodoFiorituraComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

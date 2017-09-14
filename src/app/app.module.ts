import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputEntryComponent } from './input-entry/input-entry.component';
import { PrintingComponent } from './printing/printing.component';
import { AddingEntriesComponent } from './adding-entries/adding-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    InputEntryComponent,
    PrintingComponent,
    AddingEntriesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

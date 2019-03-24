import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { FormComponent } from './form/form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { DateCounterPipe } from './date-counter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    FormComponent,
    QuoteDetailsComponent,
    QuoteDisplayComponent,
    DateCounterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

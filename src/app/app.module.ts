import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UploadComponent } from './components/upload/upload.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import { NgxSpinnerModule } from "ngx-spinner";
import { TypeofPipe } from './shared/pipes/typeof/typeof.pipe';

interface NgxSpinnerConfig {
  type?: string;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadComponent,
    TypeofPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide:  DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
    {provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

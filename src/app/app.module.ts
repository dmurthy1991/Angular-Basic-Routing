import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppService } from './app.service';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FullListComponent } from './full-list/full-list.component';

let Routes = [
  { path: 'home', component: FullListComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DetailsComponent,
    FullListComponent,
  ],
  exports: [RouterModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}

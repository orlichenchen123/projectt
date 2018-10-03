import { TornirServiesService } from './tornir-servies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ViewPageComponent } from './componnts/view-page/view-page.component';
import { SerchPageComponent } from './componnts/serch-page/serch-page.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateNewComponent } from './create-new/create-new.component';

const appRoutes : Routes = [
  {path : 'view',component:ViewPageComponent},
  {path : 'search',component: SerchPageComponent },
  {path : 'create-new',component: CreateNewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewPageComponent,
    SerchPageComponent,
    CreateNewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [TornirServiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

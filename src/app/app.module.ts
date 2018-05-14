import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchPipe } from './search.pipe';

import { ImageService } from './image.service';
import { PaginationComponent } from './gallery/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SearchPipe,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ImageService, PaginationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

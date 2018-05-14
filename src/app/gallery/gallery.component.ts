import { Component, OnInit } from '@angular/core';

import { filter } from 'rxjs/operators';
import { ImageService, IImage } from '../image.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public galleryData: IImage[];
  public search: string;
  public pageNumber = 1;
  public imagesOnPage = 10;
  public loading: boolean;
  public error = false;

  constructor(
    private imageApi: ImageService,
  ) { }

  ngOnInit() {
    this.getGalleryData();
  }

  private getGalleryData() {
    this.loading = true;

    this.imageApi.getImageJson().subscribe(
      data => {
        if (data) {
          this.loading = false;
          this.galleryData = data.filter( val => val.id <= 100);
        } else {
          this.error = true;
        }
      }
    );
  }

  public setImageLimit(value) {
    this.imagesOnPage = value.target.value;
    this.pageNumber = 1;
  }

  public changePage(value: string | number): void {
    if (typeof(value) === 'string') {
      value === 'next' ? this.pageNumber += 1 : this.pageNumber -= 1;
    } else {
      this.pageNumber = value;
    }
  }
}

import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { IImage } from '../../image.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() count: IImage[];
  @Input() limitedTo: number;
  @Input() pageNumber: number;

  @Output() changePage = new EventEmitter();

  public pages: Object;

  constructor( ) { }

  ngOnChanges() {
    this.setUpPagination();
  }

  public setUpPagination() {
    const numberOfPages = this.count.length / this.limitedTo;

    // Doesn't work in IE - could do a for loop or install polyfill
    this.pages = Array(numberOfPages).fill(numberOfPages).map((x, i) => i + 1);
  }

  public changePageEmit(value: string): void {
    this.changePage.emit(value);
  }

  public specificPageSelect(value: number): void {
    this.changePage.emit(value);
  }
}

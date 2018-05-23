import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { IImage } from '../../image.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() count: number;
  @Input() limitedTo: number;
  @Input() pageNumber: number;

  @Output() changePage = new EventEmitter();

  public pages = [];

  constructor( ) { }

  ngOnChanges() {
    this.setUpPagination();
  }

  public setUpPagination() {
    const numberOfPages = this.count / this.limitedTo;
    const pagesArr = [];

    for (let i = 0; i < Math.ceil(numberOfPages); i++) {
      pagesArr.push(i + 1);
    }

    this.pages = pagesArr;
  }

  public changePageEmit(value: string): void {
    this.changePage.emit(value);
  }

  public specificPageSelect(value: number): void {
    this.changePage.emit(value);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  private baseApi = 'http://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) {}

  public getImageJson(): Observable<IImage[]> {
    return this.http.get<IImage[]>(this.baseApi + '/photos');
  }
}

export interface IImage {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

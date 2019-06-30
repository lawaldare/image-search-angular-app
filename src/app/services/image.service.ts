import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/Image';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = '&per_page=10';

  constructor(private http: HttpClient) { }

  getImages(query): Observable<Image[]> {
    return this.http.get<Image[]>(this.URL + query + this.perPage);
  }
}

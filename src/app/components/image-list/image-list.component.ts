import { ImageService } from './../../services/image.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  searching: boolean = false;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  searchImages(query: string) {
    this.searching = true;
    this.imageService.getImages(query).subscribe(data => {
      console.log(data.hits)
      this.images = data.hits;
      () => this.searching = false;
    })
  }






}

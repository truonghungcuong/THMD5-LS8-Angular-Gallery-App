import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'data:image/jpeg;base64,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',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];
  itemWidth: number;
  config = 4;

  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit() {
    this.itemWidth = 50 / this.config;
  }

}

import { Component, Input } from '@angular/core';
import { Laptop } from 'src/app/interfaces/laptop.interface';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent {
  @Input() laptop: Laptop = {
    id: 0,
    brand: '',
    model: '',
    specs: {
      processor: '',
      memory: '',
      storage: '',
      graphics: '',
      display: ''
    },
    price: 0
  };
}

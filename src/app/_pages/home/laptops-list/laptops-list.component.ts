import { Component, Input } from '@angular/core';
import { Laptop } from 'src/app/interfaces/laptop.interface';

@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['./laptops-list.component.css']
})
export class LaptopsListComponent {
  @Input() laptops: Laptop[] = [];
}

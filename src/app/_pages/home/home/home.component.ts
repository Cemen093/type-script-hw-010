import { Component } from '@angular/core';
import { Laptop } from 'src/app/interfaces/laptop.interface';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  laptops: Laptop[] = [];

  constructor(private homeServise: HomeService) {}

  ngOnInit() {
    this.homeServise.getData().subscribe((res) => {
      this.laptops = this.homeServise.parseResponse(res);
    });
  }

}

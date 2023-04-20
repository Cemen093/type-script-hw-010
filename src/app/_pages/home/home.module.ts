import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home.service';
import { LaptopComponent } from './laptop/laptop.component';
import { LaptopsListComponent } from './laptops-list/laptops-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    LaptopsListComponent,
    LaptopComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }

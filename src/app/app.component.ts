import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { getComponentViewByInstance } from '@angular/core/src/render3/context_discovery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  movies = [ {title: 'test movie'}];
  constructor(private api: ApiService){
      this.getMovies();
  }
  getMovies = () => {
      this.api.getAllMovies().subscribe(
      data => {
          this.movies = data;
      },
      error => {
          console.log(error);
      }
      )
}}
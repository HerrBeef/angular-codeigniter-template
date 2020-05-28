import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { DatePipe } from '@angular/common';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  public filteredMovies: Movie[];
  public error: string = "";
  public query: string = "";
  public datequery: { day: number; month: number; year: number };
  private movies: Movie[];
  private datepipe: DatePipe = new DatePipe("en");

  constructor(private movieService: MovieService) {
    this.movieService.getmovies().subscribe((data) => {
      if ((data as any).success) {
        this.movies = (data as any).movies;
        this.refillFilteredMovies();
      } else {
        this.error = (data as any).error;
      }
    });
  }

  refillFilteredMovies() {
    this.filteredMovies = this.movies;
  }

  filter() {
    if(this.datequery != undefined && this.datequery != null && this.datequery.day != undefined && this.datequery.month != undefined && this.datequery.year != undefined) {
      let datequery = this.datepipe.transform(
        this.datequery.year + "-" + this.datequery.month + "-" + this.datequery.day
        ,"yyyy-MM-dd"
      );

      this.filteredMovies = this.filteredMovies.filter(
        (item) =>
          item.releasedate !== null &&
          new RegExp(datequery, "gi").test(item.releasedate)
      );
    }
    else if(this.query != "") {
      let fieldsToSearch = ["name", "description"];
      this.filteredMovies = this.movies.filter((item) =>
        fieldsToSearch.some(
          (key) =>
            item.hasOwnProperty(key) &&
            new RegExp(this.query.toLowerCase(), "gi").test(
              item[key].toLowerCase()
            )
        )
      );
    }
    else {
      this.refillFilteredMovies();
    }
  }

  ngOnInit(): void {}
}

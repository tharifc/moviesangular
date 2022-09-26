import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../service/auth.service'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  id: number = 0
  moviedetails: any
  reviews: any = []

  constructor(private router: ActivatedRoute, private service: AuthService) {
    this.router.params.subscribe(p => this.id = p["id"])
  }

  ngOnInit(): void {
    console.log(this.id);
    this.service.movieDetail(this.id).then(res => res.json()).then(data => this.moviedetails = data)
    this.service.getReviews(this.id).then(res => res.json()).then(data => this.reviews = data)



  }

}

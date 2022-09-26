import { Component, OnInit } from '@angular/core';
import{AuthService} from '../service/auth.service'
import{Router}from'@angular/router'

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  allMovies:any=[]

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.service.getallMovies().then(res=>res.json()).then(data=>{
      this.allMovies=data
    })
  }
  redirectMoviedetails(id:number){
console.log(id);this.router.navigate(["moviedetails/",id])

  }
  redirecttoAddReview(id:number){
    this.router.navigate(["movie/add_review/",id])
  }

}

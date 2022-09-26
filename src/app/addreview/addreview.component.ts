import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{AuthService}from '../service/auth.service'
import{ActivatedRoute}from '@angular/router'


@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  reviewform = new FormGroup({
    "rating": new FormControl("",Validators.required),
    "content": new FormControl("",Validators.required)
  })
id:number=0

  constructor(private service:AuthService,private router:ActivatedRoute) {
    this.router.params.subscribe(p=>this.id=p["id"])
  }

  ngOnInit(): void {
  }
  submitReviewForm(){
    console.log(this.reviewform.value);
    let data=this.reviewform.value

    return this.service.addReview(data,this.id).then(res=>res.json()).then(data=>alert("Reviewsubmitted"))
    
  }

}

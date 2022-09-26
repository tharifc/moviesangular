import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = ''
  options: any = {
    method: 'GET',
    headers: { 'content-type': 'application/json; charset=UTF-8' }
  }

  constructor() { }

  getToken(data: any) {
    this.url = `http://127.0.0.1:8000/api/v1/accounts/token`

    this.options.method = 'POST',
      this.options.body = JSON.stringify(data)
    return fetch(this.url, this.options)
  }
  getallMovies() {
    this.url = 'http://127.0.0.1:8000/api/v1/movies/'
    this.options.method = 'GET'
    let token = localStorage.getItem("token")

    // fetch(this.url,this.options).then (res=>res.json()).then(data=>console.log(data);


    return fetch('http://127.0.0.1:8000/api/v1/movies/', {
      method: 'GET',

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': 'Token ' + token
      },
    })



  }
  movieDetail(id: number) {
    let token = localStorage.getItem("token")
    return fetch(`http://127.0.0.1:8000/api/v1/movies/${id}/`, {

      method: 'GET',

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': 'Token '+ token
      }
    })
  }
  getReviews(id: number) {
    let token = localStorage.getItem("token")
    return fetch(`http://127.0.0.1:8000/api/v1/movies/${id}/get_reviews/`, {

      method: 'GET',

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': 'Token '+ token
      }
    })

  }
  addReview(data:any,id:number){
    let token=localStorage.getItem("token")
    return fetch(`http://127.0.0.1:8000/api/v1/movies/${id}/add_review/`, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization': 'Token '+ token

  },
})

  }
}
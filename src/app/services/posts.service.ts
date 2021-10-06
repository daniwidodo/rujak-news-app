import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url: string = environment.backend_url;

  constructor( 
    public HttpClient : HttpClient
    ) { console.log(this.url)}

    getAllPosts(){
      return this.HttpClient.get(this.url);
      
    }
    //
    
}

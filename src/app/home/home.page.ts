import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostsService } from './../services/posts.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  constructor( 
    public httpClient: HttpClient,
    public Posts: PostsService
    ) {
          
  }

  getPosts(){
    this.Posts.getAllPosts().subscribe( data => { console.log(data)} );
  }

}

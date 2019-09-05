import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  mArticles: Array<any>;
  mSources:any=[];

  constructor(private api: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    // Load articles
    this.api.initArticles().subscribe( 
      (data) => {
        console.log("articles ===> ",data.articles);
        this.mArticles = data.articles;
      } 
      // data => this.mAricles = data['articles']
    );

    // Load Sources
    this.api.initSources().subscribe(
      (data) => {
        console.log("Sources ===> ",data.sources);
        this.mSources = data.sources;  
        // console.log('==>',data.sources.id);
        // for(var key of this.mSources){
        //   console.log('-----0',key)
        // }    
      }
    );
  }

  searchArticles(source:any) {
    // source=this.mSources.id;
    console.log('id',source)
    console.log("selected source is " + source);
    this.api.getArticlesById(source).subscribe(
      (data) => {
        console.log("Article by id ===> ", data);
        this.mArticles = data.articles;
      }
    );
  }
  
}

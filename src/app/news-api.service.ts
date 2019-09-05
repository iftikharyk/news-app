import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  apiKey = 'aae2a83ea2704604885b374dba5faed8';
  getSource: any;
  getArticle: any;
  getArticleById: any;

  constructor(private http: HttpClient) { }

  initSources() {
    console.log('https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey);
    this.getSource = this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey);
    console.log("Sources -->", this.getSource);
    return this.getSource;
    // return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey;
  }

  initArticles() {
    this.getArticle = this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.apiKey);
    console.log("Articles -->", this.getArticle);
    return this.getArticle;
  }

  getArticlesById(source: String) {
    this.getArticleById = this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.apiKey);
    console.log("Article by Id" ,this.getArticleById);
    return this.getArticleById;
  }
}

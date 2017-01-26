import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService {
  private getArticleUrl = 'http://192.168.5.20:8080/ifm.webservice.article/api/article/get';
  // private getArticleUrl = 'http://localhost:8080/api/article/get';

  constructor(private http: Http) {
  }

  getArticle(companyCode: string, articleCode: string, articleName: string, articleGroupCode: string) {
    return this.http.get(this.getArticleUrl + "/" + companyCode + "/" + articleCode + "/" + articleName + "/" + articleGroupCode + "/Y")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

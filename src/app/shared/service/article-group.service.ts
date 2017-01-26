import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ArticleGroupService {
  private getAllArticleGroupUrl = 'http://192.168.5.20:8080/ifm.webservice.articlegroup/api/articlegroup/get';
  // private getAllArticleGroupUrl = 'http://localhost:8080/api/articlegroup/getall';

  constructor(private http: Http) {
  }

  getArticleGroup(companyCode: string) {
    return this.http.get(this.getAllArticleGroupUrl + "/" + companyCode + '/%25%25/%25%25/%25%25/Y')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

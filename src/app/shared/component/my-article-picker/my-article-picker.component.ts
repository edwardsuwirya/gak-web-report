import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {Article} from '../../model/article';
import {ArticleGroup} from "../../model/article-group";
import {ArticleGroupService} from "../../service/article-group.service";
import {ArticleService} from "../../service/article.service";

declare let $: any;
declare let Materialize: any;

@Component({
  selector: 'app-my-article-picker',
  templateUrl: './my-article-picker.component.html',
  providers: [ArticleService, ArticleGroupService],
  styleUrls: ['./my-article-picker.component.css']
})
export class MyArticlePickerComponent implements OnInit, AfterViewInit {

  @Input()
  articlePickerId: string;

  @Output()
  articleSelection = new EventEmitter<Article>();

  articles: Article[];
  articleGroups: ArticleGroup[];

  articleCode: string;
  articleName: string;
  articleGroup: string;

  constructor(private articleGroupService: ArticleGroupService, private articleService: ArticleService) {

  }

  ngOnInit() {
    this.articleGroupService.getArticleGroup("GAK")
      .subscribe(cr => {
        let resp = cr.responseDescription;
        this.articleGroups = JSON.parse(resp);
        // console.log(this.articleGroups[0]);
      }, err => {
        console.log(err);
      });
  }

  ngAfterViewInit() {
    $('.modal').modal();
    $('select').select2();
  }

  onArticleSelection(article: Article) {
    this.articleSelection.emit(article);
    $('.modal').modal('close');
  }

  onRefreshData() {
    let articleCode: string;
    let articleName: string;
    let articleGroupCode: string;
    if (!this.articleCode) {
      articleCode = '%%';
    } else {
      articleCode = this.articleCode;
    }
    if (!this.articleName) {
      articleName = '%%';
    } else {
      articleName = this.articleName;
    }
    this.articleGroup = $('#articleGroupSelect').val();
    console.log(this.articleGroup)
    if (!this.articleGroup) {
      articleGroupCode = '%%';
    } else {
      articleGroupCode = this.articleGroup;
    }


    this.articleService.getArticle('GAK', encodeURI(articleCode), encodeURI(articleName), encodeURI(articleGroupCode))
      .subscribe(cr => {
        let resp = cr.responseDescription;
        this.articles = JSON.parse(resp);
      }, err => {
        Materialize.toast('Failed to get data picker', 2500, 'red');
      });

  }
}

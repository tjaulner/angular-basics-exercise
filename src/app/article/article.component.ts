import { Component } from "@angular/core";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})

export class ArticleComponent {
  title: string = "Whatever you want";
  content: string = "Some Conent Goes Here";
  isTechRelated: boolean = true;


  setColor() {
    return this.isTechRelated === true ? "blue" : "yellow";
  }

  setTechStatus() {
    return this.isTechRelated = false;
  }
}


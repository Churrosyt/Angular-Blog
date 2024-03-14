import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../../app/data/dataFakes';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {


  photoCover:string=""
  contentTitle:string=""
  contentDescription=""
  private id:string | null = ""

  constructor(
    private route:ActivatedRoute
  ){ }

  ngOnInit(): void{
    this.route.paramMap.subscribe( value => this.id = value.get("Id"))

    this.setValuesToComponent(this.id)


  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]


    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover

  }


}

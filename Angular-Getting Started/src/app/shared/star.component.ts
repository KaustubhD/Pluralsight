import { Component, OnChanges } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './start.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  rating: number = 4;
  starWidth: number;
  ngOnChanges(){
    this.starWidth = this.rating * 75 / 5
  }
}
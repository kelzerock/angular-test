import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  interpolation: ['{{', '}}'], // определяет скобки для интерполяции
})
export class CardComponent implements OnInit {
  @Input() card: Card = { title: '', text: '' };
  @Input() index: number = 0;
  ngOnInit() {}
  textColor: string = 'none';
  title = 'My Card Title';
  text = 'My some text';
  cardDate: Date = new Date;
  changeTitle() {
    this.card.title = 'Title has been changed';
  }
  inputHandler(value: any) {
    // const value = event.target.value;
    this.title = value;
  }

  changeHandler() {
    console.log(this.title);
  }
}

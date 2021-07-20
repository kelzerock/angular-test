import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  interpolation: ['{{','}}'] // определяет скобки для интерполяции
})
export class CardComponent implements OnInit {
  ngOnInit(){
    setTimeout(() => {
      this.imgUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png`
    }, 3000);
  }
  title = 'My Card Title'
  text  = 'My some text'
  number = 42
  array = [1, 3,5,6,7]
  obj = { name: 'Alex', size: 'what!?'}

  imgUrl: string = `https://img1.freepng.ru/20180329/jue/kisspng-angularjs-dart-front-and-back-ends-npm-escalator-5abda7d6ba62f5.4348649815223787107634.jpg`
  getInfo():string{
    return 'This is info'
  }

}

import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { DateCounterPipe } from '../date-counter.pipe'

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

  quotes = [
    new Quote(1,'A dead clock is right twice a day', 'Thomas Edison', 'Hussein Fuaad', new Date(2019, 2, 22), 0, 0),
    new Quote(2,'You never hate the road until you are missing home', 'Passenger', 'Ali Hamid', new Date(2019, 2, 23), 0, 0)
  ]

   addNewQuote(quote){
     let quoteLength = this.quotes.length;
     quote.id = quoteLength + 1;
     quote.author = quote.author;
     quote.name = quote.name
     quote.date = new Date(quote.date)
     this.quotes.push(quote)
   }

  deleteQuote(index) {
   this.quotes.splice(index, 1);
     }

  constructor() { }

  ngOnInit() {
  }

}

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
    new Quote(1,'A dead clock is right twice a day', 'Thomas Edison', 'Hussein Fuaad', new Date(2019, 2, 20), 0, 0),
    new Quote(2,'You never hate the road until you are missing home', 'Passenger', 'Ali Hamid', new Date(2019, 2, 21), 0, 0),
    new Quote(3,'Have no fear of perfection, you will never reach it', 'Salvador Dali', 'Fahim Hamad', new Date(2019, 2, 22), 0, 0),
    new Quote(4,'You miss 100% of the shots you do not take', 'Lee Harvey', 'AbdulKadir Salim', new Date(2019, 2, 23), 0, 0)
  ]

  mostVotes: number = 0
  bestAuthor: string
  bestQuote: string
  checker() {
    this.mostVotes = 0;
    for(var x = 0; x < this.quotes.length; x++){
      if(this.quotes[x].upVotes > this.mostVotes) {
        this.mostVotes = this.quotes[x].upVotes;
        this.bestAuthor = this.quotes[x].author;
        this.bestQuote = this.quotes[x].quote;
      }
    }
  }

   addNewQuote(quote){
     let quoteLength = this.quotes.length;
     quote.id = quoteLength + 1;
     quote.author = quote.author;
     quote.name = quote.name
     quote.date = new Date(quote.date)
     this.quotes.push(quote)
   }

   deleteQuote(isComplete, index){
   if(isComplete){
     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)

     if(toDelete){
       this.quotes.splice(index, 1)
     }
   }
 }

  constructor() {
    let maxVotes = 0;
  }

  ngOnInit() {
  }

}

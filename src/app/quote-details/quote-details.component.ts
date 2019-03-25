import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteUpVote(quote){
    quote.upVotes = quote.upVotes + 1;
  }

  quoteDownVote(quote){
    quote.downVotes = quote.downVotes + 1;
  }

  quoteDelete(complete: boolean){
    this.isComplete.emit(complete);
  }
  

  constructor() { }

  ngOnInit() {
  }

}

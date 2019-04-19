import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() type;
  @Output() emitSearchString = new EventEmitter();
  @ViewChild('search') search: ElementRef;

  searchString: string;
  searchIsActive: boolean;

  constructor() { }

  ngOnInit() {
  }


  activateSearch() {
    this.searchIsActive = true;
    setTimeout(() => {
      this.search.nativeElement.focus();
    }, 0);
  }
}

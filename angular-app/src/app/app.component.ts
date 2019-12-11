import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  @Input() selectedvalue: string;
  newArray: any[];
  filtervalue: string;
  lang: any[];
  ngOnInit() {
    this.lang = ['Java', 'DotNet', 'Python'];
    this.newArray = this.selectedvalue && this.selectedvalue !== '0' ? this.lang.filter(item => item === this.selectedvalue ) : this.lang;

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedvalue.currentValue !== changes.selectedvalue.previousValue) {
      const curr = changes.selectedvalue.currentValue;
      this.newArray = curr && curr !== '0' ? this.lang.filter(item => item === curr ) : this.lang;
    }
  }
}

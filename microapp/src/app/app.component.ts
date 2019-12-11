import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {

  languages: any[];
  angcounter: number;
  reccounter: number;
  reactvalue: '';
  ngvalue: '';
  ngselectedval: '';
  toggleval: boolean;
  constructor(private elementRef: ElementRef) {
    }

  ngOnInit() {
    this.languages = ['Java', 'DotNet', 'Python'];
    this.angcounter = 0;
    this.reccounter = 0;
    this.toggleval = false;

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#angularincrementer')
                                  .addEventListener('click', this.angularincrementer.bind(this), false);
    this.elementRef.nativeElement.querySelector('#reactincrementer')
                                  .addEventListener('click', this.reactincrementer.bind(this), false);
    this.elementRef.nativeElement.querySelector('#toggleme')
                                  .addEventListener('click', this.toggle.bind(this), false);
  }

  angularincrementer = () => {
    this.angcounter++;
  }

  reactincrementer = () => {
    this.reccounter++;
  }

  toggle = () => {
    this.toggleval = !this.toggleval;
    const rele = this.elementRef.nativeElement.querySelector('react-app');
    rele.setAttribute('toggle', this.toggleval);
  }
  filterReact(filterVal: any) {
    this.reactvalue = filterVal;
    const rele = this.elementRef.nativeElement.querySelector('react-app');
    rele.setAttribute('selectedvalue', this.reactvalue);
  }
  filterAngular(filterVal: any) {
    this.ngselectedval = filterVal;
  }
}

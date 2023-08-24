import { Component, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild("#wrapper") wrapper!: ElementRef;
  ngOnInit() {
    d3.select(this.wrapper.nativeElement).append("svg").append("g");
  }
}

import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'linear-gradient(90deg, rgba(67,176,92,1) 0%, rgba(23,204,86,1) 54%)';
  }
}

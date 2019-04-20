import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirm-after-request',
  templateUrl: './confirm-after-request.component.html',
  styleUrls: ['./confirm-after-request.component.css']
})
export class ConfirmAfterRequestComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'linear-gradient(90deg, rgba(67,176,92,1) 0%, rgba(23,204,86,1) 54%)';
  }
}

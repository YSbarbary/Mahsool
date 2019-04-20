import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.background = '#fff';
  }
}

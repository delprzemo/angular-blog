import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { CodeNode } from 'source-list-map';

@Component({
  selector: 'app-show-code',
  templateUrl: './show-code.component.html',
  styleUrls: ['./show-code.component.less']
})
export class ShowCodeComponent implements OnInit {
  @Input() lang: string;
  @ViewChild("codeHidden") codeHidden: ElementRef;
  @ViewChild("code") code: ElementRef;

  constructor() { }

  ngOnInit() {
    if(!this.code.nativeElement.innerHTML 
        && this.codeHidden.nativeElement.innerHTML.indexOf('_ngcontent') < 0) {
        console.log(this.codeHidden.nativeElement.innerHTML)
        this.code.nativeElement.innerHTML =  this.codeHidden.nativeElement.innerHTML; 
    }                                        
  }

}

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-code-area',
  templateUrl: './code-area.component.html',
  styleUrls: ['./code-area.component.less']
})
export class CodeAreaComponent implements OnInit, AfterViewInit {
  @Input() language: string;
  @ViewChild('rawContent') rawContent: ElementRef;
  content: string;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.content = this.rawContent.nativeElement.innerHTML;
    this.cdRef.detectChanges();
  }
}

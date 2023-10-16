import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @Input('Color') color : string | undefined;
  constructor(private el:ElementRef, private renderer:Renderer2) { }
  ngOnInit(){
   this.renderer.setStyle(this.el.nativeElement, 'color',this.color)
  }
}

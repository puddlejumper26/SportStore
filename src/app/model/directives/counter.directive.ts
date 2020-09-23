import {
    Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges
} from '@angular/core';

@Directive(
    {
        selector: '[counterOf]'
    }
)
export class CounterDirective {
    constructor(private container: ViewContainerRef,
                private template: TemplateRef<Object>){
    }

    @Input('counterOf')
    countera: number;

    ngOnChanges(changes: SimpleChanges){
        this.container.clear();
        for (let i = 0; i < this.countera; i++){
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    }
}

class CounterDirectiveContext {
    constructor(public $implicit: any){}
}
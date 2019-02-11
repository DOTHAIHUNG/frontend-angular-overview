import { Component, OnInit } from '@angular/core'; 
@Component({
	selector: 'app-font-resize', 
	template: `<h2>Font-resize Component</h2>`,
	templateUrl: './font-resize.component.html'
})
export class FontResizeComponent implements OnInit { 
	fontSize = 14;
	contructor(){}
	onChange(value){
		this.fontSize=value;
	}
	ngOnInit(){}
}
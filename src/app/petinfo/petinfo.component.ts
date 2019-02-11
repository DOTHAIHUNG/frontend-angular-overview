import {Component} from '@angular/core';
@Component({
	selector:'app-petinfo',
	templateUrl:'petinfo.component.html'
})
export class PetInfoComponent {
	petName = 'John';
	petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
	contructor(){}
	updateName(name){
		this.petName=name;
	}
	updateImage(imageUrl){
		this.petImage=imageUrl;
	}
}
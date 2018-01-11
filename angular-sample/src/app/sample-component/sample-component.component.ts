import { Component, OnInit } from '@angular/core';
import {class1} from '../class1';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {

	testclass1: class1 {
		id:1,
		name:'testclass'
	};

  constructor() { }

  ngOnInit() {
  }

  

}

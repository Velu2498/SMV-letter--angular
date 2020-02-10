import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-promtbox',
  templateUrl: './promtbox.component.html',
  styleUrls: ['./promtbox.component.css']
})
export class PromtboxComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
  }
  
  l=this.data.list

}

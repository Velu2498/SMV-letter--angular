import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DataService } from '../data.service';
// import{Popup} from 'ng2-opd-popup'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings : IDropdownSettings;

  constructor(private data:DataService) {
 
   }

  ngOnInit() {

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      // { item_id: 3, item_text: 'Pune' },
      // { item_id: 4, item_text: 'Navsari' }
      ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


  }

  onItemSelect(item: any) {
    console.log(item);
    this.data.list.push(item)
    console.log(this.data.list)
  }

  all=[];
  onSelectAll(items: any) {
    console.log(items);
    this.all.push(items)
    this.data.list.push(this.form.value)
    this.data.list.push(this.all)
    console.log(this.form.value)
    console.log(this.data.list)
  }

  
  form = new FormGroup({
    Name: new FormControl(''),
    age: new FormControl(''),
  });

 
  fun(){
    console.log(this.form.value)
    this.data.list.push(this.form.value)
    prompt("letter");
    // this.popup.show();
  }

}



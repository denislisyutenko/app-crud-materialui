import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  productConditionList = [
    {value: 'new', caption: 'Новий'},
    {value: 'used', caption: 'Б/в'},
    {value: 'new', caption: 'Після ремонту'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    category: ['', [Validators.required]],
    productCondition: ['', [Validators.required]],
    price: ['', [Validators.required]],
    comment: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  productConditionList = [
    {value: 'new', caption: 'Новий'},
    {value: 'used', caption: 'Б/в'},
    {value: 'new', caption: 'Після ремонту'},
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    console.log(this.form.value);
  }
}

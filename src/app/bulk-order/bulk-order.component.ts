import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-bulk-order',
  templateUrl: './bulk-order.component.html',
  styleUrls: ['./bulk-order.component.scss']
})
export class BulkOrderComponent {
  inputData:FormGroup;
  userData:any=[];
  isEdit=false
  submitted=false;
  selectIndex:any;
  constructor(private FormBuilder:FormBuilder){
    this.inputData = this.FormBuilder.group({
      name:['', Validators.required],
      email:['', Validators.required],
      number:['', Validators.required],
      requirement:['', Validators.required],
      address:['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
      pincode:['', Validators.required],

    })
  }
  ngOnInit(): void {
  }

  get f(){
    return this.inputData.controls
  }
  submit(){
    this.submitted=true;
    if (this.inputData.valid) {
      this.userData.push(this.inputData.value)
    } else {
      console.warn('enter valid data')
    }
  }
}

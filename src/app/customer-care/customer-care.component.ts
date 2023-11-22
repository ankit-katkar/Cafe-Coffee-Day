import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-care',
  templateUrl: './customer-care.component.html',
  styleUrls: ['./customer-care.component.scss']
})
export class CustomerCareComponent {
  inputData:FormGroup;
  userData:any=[];
  isEdit=false
  submitted=false;
  selectIndex:any;
  constructor(private FormBuilder:FormBuilder){
    this.inputData = this.FormBuilder.group({
      name:['', Validators.required],
      circle:['', Validators.required],
      email:['', Validators.required],
      city:['', Validators.required],
      number:['', Validators.required],
      state:['', Validators.required],
      message:['', Validators.required]

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

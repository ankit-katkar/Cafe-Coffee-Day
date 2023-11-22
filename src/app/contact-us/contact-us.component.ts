import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
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
      subject:['', Validators.required],
      city:['', Validators.required],
      message:['', Validators.required],
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

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-catering-service',
  templateUrl: './catering-service.component.html',
  styleUrls: ['./catering-service.component.scss']
})
export class CateringServiceComponent {
  inputData:FormGroup;
  userData:any=[];
  isEdit=false
  submitted=false;
  selectIndex:any;
  constructor(private FormBuilder:FormBuilder){
    this.inputData = this.FormBuilder.group({
      name:['', Validators.required],
      location:['', Validators.required],
      email:['', Validators.required],
      calender:['', Validators.required],
      company:['', Validators.required],
      HMD:['', Validators.required],
      number:['', Validators.required],
      people:['', Validators.required],
      event:['', Validators.required],
      perference:['', Validators.required],
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

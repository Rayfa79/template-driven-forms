import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  defaultSubscription = 'advanced';
  @ViewChild('f') registrationForm: NgForm;

onSubmit(registrationForm) {
  console.log(registrationForm)
}


}



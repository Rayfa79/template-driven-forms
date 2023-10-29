import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent {
  submitted = false;
  list= {
    name: "",
    number: ""

  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    const value = form.value
    this.list.name = value.name
   this.list.number = value.number + '$'
  }


}



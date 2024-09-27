import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VolApplyInfoService } from '../../../services/vol-apply-info.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vol-apply',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './vol-apply.component.html',
  styleUrl: './vol-apply.component.css'
})

export class VolApplyComponent {
  volApplyInfo = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    category: '',
    message: ''
  };
  formSubmitted = false;

  constructor(private volService: VolApplyInfoService) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.formSubmitted = true;

      console.log('Form Data:', this.volApplyInfo);
      this.volService.sendContactForm(this.volApplyInfo).subscribe(response => {
        console.log('Form submitted successfully', response);
      }, error => {
        console.log('Error sending message.', error);
      }
    );

      form.resetForm();
    }
  }
}

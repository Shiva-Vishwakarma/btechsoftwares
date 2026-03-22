// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   standalone: true,
//   imports: [],
//   templateUrl: './contact.component.html',
//   styleUrl: './contact.component.scss'
// })
// export class ContactComponent {

// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {
//   FormsModule,
//   ReactiveFormsModule,
//   FormBuilder,
//   FormGroup,
//   Validators,
// } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-contact',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule,
//     MatButtonModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatSelectModule,
//     MatSnackBarModule,
//   ],
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss'],
// })
// export class ContactComponent {
//   contactForm: FormGroup;
//   submitted = false;

//   contactInfo = [
//     {
//       icon: 'location',
//       title: 'Visit Us',
//       details: ['123 Business Street', 'Suite 100', 'City, State 12345'],
//     },
//     {
//       icon: 'phone',
//       title: 'Call Us',
//       details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
//     },
//     {
//       icon: 'email',
//       title: 'Email Us',
//       details: ['info@company.com', 'support@company.com'],
//     },
//     {
//       icon: 'clock',
//       title: 'Working Hours',
//       details: [
//         'Monday - Friday: 9:00 AM - 6:00 PM',
//         'Saturday: 10:00 AM - 4:00 PM',
//         'Sunday: Closed',
//       ],
//     },
//   ];

//   constructor(
//     private fb: FormBuilder,
//     private snackBar: MatSnackBar,
//   ) {
//     this.contactForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(2)]],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', [Validators.pattern('^[0-9]{10,15}$')]],
//       subject: ['', [Validators.required]],
//       message: ['', [Validators.required, Validators.minLength(10)]],
//     });
//   }

//   onSubmit() {
//     this.submitted = true;

//     if (this.contactForm.valid) {
//       // Here you would normally send the data to your backend
//       console.log('Form submitted:', this.contactForm.value);

//       this.snackBar.open(
//         'Message sent successfully! We will get back to you soon.',
//         'Close',
//         {
//           duration: 5000,
//           horizontalPosition: 'center',
//           verticalPosition: 'bottom',
//           panelClass: ['success-snackbar'],
//         },
//       );

//       this.contactForm.reset();
//       this.submitted = false;
//     } else {
//       this.snackBar.open(
//         'Please fill all required fields correctly.',
//         'Close',
//         {
//           duration: 5000,
//           horizontalPosition: 'center',
//           verticalPosition: 'bottom',
//           panelClass: ['error-snackbar'],
//         },
//       );
//     }
//   }

//   get f() {
//     return this.contactForm.controls;
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  contactInfo = [
    {
      icon: 'location',
      title: 'Visit Us',
      details: [
        'KH NO-260 KODER, Rajaji Puram Road',
        'PAL TIRAHA, Lucknow',
        'Uttar Pradesh 226017',
      ],
    },
    {
      icon: 'phone',
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43210'],
    },
    {
      icon: 'email',
      title: 'Email Us',
      details: ['info@btechsoftwares.com', 'support@btechsoftwares.com'],
    },
    {
      icon: 'clock',
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9]{10,15}$')]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);

      this.snackBar.open(
        'Message sent successfully! We will get back to you soon.',
        'Close',
        {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['success-snackbar'],
        },
      );

      this.contactForm.reset();
      this.submitted = false;
    } else {
      this.snackBar.open(
        'Please fill all required fields correctly.',
        'Close',
        {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar'],
        },
      );
    }
  }

  get f() {
    return this.contactForm.controls;
  }
}

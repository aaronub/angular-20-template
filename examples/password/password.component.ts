import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-demo',
    templateUrl: './password-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordDemo {
    value!: string;
}
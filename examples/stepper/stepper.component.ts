import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButton } from 'primeng/togglebutton';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'stepper-demo',
    templateUrl: './stepper-demo.html',
    standalone: true,
    imports: [
      StepperModule,
      ButtonModule,
      InputTextModule,
      ToggleButton,
      IconField,
      InputIcon,
      CommonModule
    ]
})
export class StepperDemo {
    activeStep: number = 1;

    name = null;

    email = null;

    password = null;

    option1: boolean | undefined = false;

    option2: boolean | undefined = false;

    option3: boolean | undefined = false;

    option4: boolean | undefined = false;

    option5: boolean | undefined = false;

    option6: boolean | undefined = false;

    option7: boolean | undefined = false;

    option8: boolean | undefined = false;

    option9: boolean | undefined = false;

    option10: boolean | undefined = false;
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Checkbox } from 'primeng/checkbox';
import { RadioButton } from 'primeng/radiobutton';
import { FloatLabelModule } from 'primeng/floatlabel';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'input-group-demo',
    templateUrl: './input-group-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule, ButtonModule, MenuModule, Checkbox, RadioButton, FloatLabelModule]
})
export class InputGroupDemo {
    text1: string | undefined;

    text2: string | undefined;

    number: string | undefined;

    selectedCity: City | undefined;

    cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ];

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }];
    }

    radioValue1: boolean = false;

    checked1: boolean = false;

    checked2: boolean = false;

    category: string | undefined;
}
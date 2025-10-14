import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-demo',
    templateUrl: './checkbox.component.html',
    standalone: true,
    imports: [FormsModule, CheckboxModule]
})
export class CheckboxDemoComponent {
    checked: boolean = false;

    selectedCategories: any[] = [];

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    ngOnInit() {
        this.selectedCategories = [this.categories[1]];
    }
}
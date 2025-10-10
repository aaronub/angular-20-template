import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-demo',
    templateUrl: './autocomplete-demo.html',
    imports: [AutoComplete, FormsModule],
    standalone: true,
})
export class AutocompleteDemo {
    items: any[] = [];

    value: any;
    value1: any;
    value2: any;
    value3: any;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}
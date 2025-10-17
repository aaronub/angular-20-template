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
    valueBlur: any[] = [];
    valueTab: any[] = [];
    valueSeparator: any[] = [];
    valueCombined: any[] = [];

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map(item => event.query + '-' + item);
    }

    selectedCountry: any;

    filteredCountries: any[] | undefined;

    countries: any[] = [                    
        { name: 'United States', code: 'US' },
        { name: 'Canada', code: 'CA' },
        { name: 'United Kingdom', code: 'UK' },
        { name: 'Germany', code: 'DE' },
        { name: 'France', code: 'FR' },
        { name: 'India', code: 'IN' },
        { name: 'China', code: 'CN' },
    ];

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}
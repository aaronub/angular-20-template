import { Component } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'paginator-demo',
    templateUrl: './paginator-demo.html',
    standalone: true,
    imports: [PaginatorModule]
})
export class PaginatorDemo {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
    }

    first1: number = 0;

    rows1: number = 10;

    first2: number = 0;

    rows2: number = 10;

    first3: number = 0;

    rows3: number = 10;

    totalRecords: number = 120;

    options = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 }
    ];

    onPageChange1(event: PaginatorState) {
        this.first1 = event.first ?? 0;
        this.rows1 = event.rows ?? 10;
    }

    onPageChange2(event: PaginatorState) {
        this.first2 = event.first ?? 0;
        this.rows2 = event.rows ?? 10;
    }

    onPageChange3(event: PaginatorState) {
        this.first3 = event.first ?? 0;
        this.rows3 = event.rows ?? 10;
    }
}
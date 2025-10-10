import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tabs-demo',
    templateUrl: './tabs-demo.html',
    standalone: true,
    imports: [CommonModule, TabsModule]
})
export class TabsDemo {
    activeIndex: number = 0;

    scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: "Title", content: "Content" }));

    tabs = [
        { route: 'dashboard', label: 'Dashboard', icon: 'pi pi-home' },
        { route: 'transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
        { route: 'products', label: 'Products', icon: 'pi pi-list' },
        { route: 'messages', label: 'Messages', icon: 'pi pi-inbox' }
    ];
}
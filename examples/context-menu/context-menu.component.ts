import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';

@Component({
    selector: 'context-menu-demo',
    templateUrl: './context-menu-demo.html',
    standalone: true,
    imports: [ContextMenu]
})
export class ContextMenuDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Copy', icon: 'pi pi-copy' },
            { label: 'Rename', icon: 'pi pi-file-edit' }
        ];
    }
}
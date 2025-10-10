import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tiered-menu-section',
  standalone: true,
  imports: [CommonModule, TieredMenuModule, ButtonModule],
  templateUrl: './tiered-menu-section.component.html',
  styleUrl: './tiered-menu-section.component.scss'
})
export class TieredMenuSectionComponent {
  items: MenuItem[] = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Document',
              icon: 'pi pi-fw pi-file'
            },
            {
              label: 'Image',
              icon: 'pi pi-fw pi-image'
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video'
            }
          ]
        },
        {
          label: 'Open',
          icon: 'pi pi-fw pi-folder-open'
        },
        {
          label: 'Print',
          icon: 'pi pi-fw pi-print'
        }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {
          label: 'Copy',
          icon: 'pi pi-fw pi-copy'
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        }
      ]
    },
    {
      label: 'Search',
      icon: 'pi pi-fw pi-search'
    },
    {
      label: 'Share',
      icon: 'pi pi-fw pi-share-alt',
      items: [
        {
          label: 'Slack',
          icon: 'pi pi-fw pi-slack'
        },
        {
          label: 'Whatsapp',
          icon: 'pi pi-fw pi-whatsapp'
        }
      ]
    }
  ];
} 
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
    selector: 'avatar-demo',
    templateUrl: './avatar-demo.html',
    standalone: true,
    imports: [AvatarModule, OverlayBadgeModule]
})
export class AvatarDemo {}
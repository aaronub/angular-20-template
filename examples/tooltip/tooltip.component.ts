import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tooltip-demo',
    templateUrl: './tooltip.component.html',
    standalone: true,
    imports: [Tooltip, InputTextModule, ButtonModule]
})
export class TooltipDemoComponent {}
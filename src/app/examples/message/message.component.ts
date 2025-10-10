import { Component, signal } from '@angular/core';
import { Message } from 'primeng/message';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'message-demo',
    templateUrl: './message-demo.html',
    standalone: true,
    imports: [Message, ButtonModule]
})
export class MessageDemo {
    messages = signal<any[]>([]);

    addMessages() {
        this.messages.set([
            { severity: 'info', content: 'Dynamic Info Message' },
            { severity: 'success', content: 'Dynamic Success Message' },
            { severity: 'warn', content: 'Dynamic Warn Message' },
        ]);
    }

    clearMessages() {
        this.messages.set([]);
    }
}
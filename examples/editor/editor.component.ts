import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor } from 'primeng/editor';

@Component({
    selector: 'editor-demo',
    templateUrl: './editor.component.html',
    standalone: true,
    imports: [FormsModule, Editor]
})
export class EditorDemoComponent {
    text: string | undefined;
}
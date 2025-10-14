import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-demo',
    templateUrl: './file-upload-demo.html',
    standalone: true,
    imports: [FileUpload, ToastModule, ButtonModule, CommonModule],
    providers: [MessageService]
})
export class FileUploadDemo {
    constructor(private messageService: MessageService) {}

    onUpload(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }

    uploadedFiles: any[] = [];
    
    onUpload2(event:UploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}
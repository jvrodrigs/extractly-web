import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFiles: File[] = [];
  maxFileSizeInBytes = 10 * 1024 * 1024; // 10 MB em bytes

  handleFileChange(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      const files: File[] = Array.from(inputElement.files);
      const validFiles = files.filter(file => this.isFileValid(file));
      
      // Se todos os arquivos são válidos, adiciona à lista
      if (validFiles.length > 0) {
        this.addFiles(validFiles);
      }
    }

    console.log(this.selectedFiles);
  }

  addFiles(files: File[]): void {
    this.selectedFiles.push(...files);
  }

  isFileValid(file: File): boolean {
    if (file.size > this.maxFileSizeInBytes) {
      alert(`O arquivo ${file.name} excede o limite de 1GB.`);
      return false;
    }
    return true;
  }
}

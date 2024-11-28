import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IDefaultGenericResponse, IDefaultResponse } from 'src/app/domain/defaultResponse.model';
import { AwsLambdaService } from 'src/app/shared/services/aws-lambda/aws-lambda.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFiles: File[] = [];
  maxFileSizeInBytes = 10 * 1024 * 1024; // 10 MB em bytes
  responseApiRest!: IDefaultResponse | null;

  responseGenericApiRest!: any;

  constructor(
    private apiRest: AwsLambdaService,
    private sanitizer: DomSanitizer
  ) {}
  
  handleFileChange(event: any) {
    this.responseApiRest = null;
    this.selectedFiles = [];
    
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      const files: File[] = Array.from(inputElement.files);
      const validFiles = files.filter(file => this.isFileValid(file));
      
      // Se todos os arquivos são válidos, adiciona à lista
      if (validFiles.length > 0) {
        this.addFiles(validFiles);
      }
    }
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

  handlerSendFile(): void {
    if (this.selectedFiles.length == 1) {
      this.apiRest.uploadFile(this.selectedFiles[0]).subscribe({
        next: (response) => { 
          this.responseApiRest = response;
        },
        error: (error) => {
          console.error(`Error ao realizar o upload: ${error}`)
        }
      })
    } else {
      console.error("Error?")
    }
  }

  handlerSendFileFake(): void {
    if (this.selectedFiles.length == 1) {
      this.apiRest.fakeRequest().subscribe({
        next: (response) => { 
          this.responseApiRest = response;
          this.responseGenericApiRest = response;
        },
        error: (error) => {
          console.error(`Error ao realizar o upload: ${error}`)
        }
      })
    } else {
      console.error("Error?")
    }
  }

  handlerInterpretTextResponse(html: String): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      html
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/\n/g, '<br>')
    );
  }

  isMessageString(message: string | object): message is string {
    return typeof message === 'string';
  }
}

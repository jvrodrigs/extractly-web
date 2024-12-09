import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { IDefaultGenericResponse, IDefaultResponse } from 'src/app/domain/defaultResponse.model';
import { AwsLambdaService } from 'src/app/shared/services/aws-lambda/aws-lambda.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFiles: File | null = null;
  maxFileSizeInBytes = 10 * 1024 * 1024; // 10 MB em bytes
  responseApiRest!: IDefaultResponse | null;

  responseGenericApiRest!: any;

  constructor(
    private apiRest: AwsLambdaService,
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService
  ) {}
  
  handleFileChange(event: any) {
    this.responseApiRest = null;
        
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        this.selectedFiles = target.files[0];
        this.isFileValid(this.selectedFiles!)
      }      
    }
  }

  isFileValid(file: File): boolean {
    if (file.size > this.maxFileSizeInBytes) {
      alert(`O arquivo ${file.name} excede o limite de 1GB.`);
      return false;
    }
    return true;
  }

  handlerSendFile(): void {
    if (this.selectedFiles != null) {
      this.spinner.show();
      this.apiRest.uploadFile(this.selectedFiles).subscribe({
        next: (response) => { 
          this.responseApiRest = response;
          this.responseGenericApiRest = response;
        },
        error: (error) => {
          console.error(`Error ao realizar o upload: ${error}`)
        },
        complete: () => {
          this.spinner.hide();
        }
      })
    } else {
      console.error("Error?")
    }
  }

  handlerSendFileFake(): void {
    if (this.selectedFiles != null) {
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

  objectKeys(obj: any): string[] {
    return Object.keys(obj).sort((a, b) => a.localeCompare(b));
  }
}

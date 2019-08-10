import { Component,OnInit } from '@angular/core';
//import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
//import { analyzeAndValidateNgModules } from '@angular/compiler';

//API URL
//const UploadURL = 'http://localhost:51737/api/MultipleFileUpload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular MultiFile Uploader App';

  //public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'photo'});
  
  ngOnInit() {
    //For uploading file one by one from queue
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //     console.log('FileUpload:uploaded:', item, status, response);
    //     //alert('File uploaded successfully');
    //  };

     //For adding all files
    //  this.uploader.onAfterAddingAll=(FileList)=>{FileList};
    //  this.uploader.onCompleteAll=():any=>{
    //   alert('Files uploaded successfully');
    //  };
 }
}

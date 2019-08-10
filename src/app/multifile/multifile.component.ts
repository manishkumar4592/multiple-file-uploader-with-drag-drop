import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

// #region readBase64
function readBase64(file): Promise<any> {
  var reader  = new FileReader();
  var future = new Promise((resolve, reject) => {
    reader.addEventListener("load", function () {
      resolve(reader.result);
    }, false);

    reader.addEventListener("error", function (event) {
      reject(event);
    }, false);

    reader.readAsDataURL(file);
  });
  return future;
}
// #endregion

// const URL = '/api/';
const UploadURL = 'http://localhost:51737/api/MultipleFileUpload';

@Component({
  selector: 'app-multifile',
  templateUrl: './multifile.component.html',
  styleUrls: ['./multifile.component.css']
})
export class MultifileComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({
    url: UploadURL, 
    disableMultipart:false
    });
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  fileObject: any;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e; 
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public onFileSelected(event: FileList) {//EventEmitter<File[]>
    const file: File = event[0];

    console.log(file);

    readBase64(file)
      .then(function(data) {
      console.log(data);
    })

  }

  constructor() { }

  ngOnInit() {
    //For adding all files
     this.uploader.onCompleteAll=():any=>{
      //To clear all files after uploading
      this.uploader.clearQueue();

      alert('Files uploaded successfully');
     };
  }

}

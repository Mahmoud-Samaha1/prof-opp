
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-work-shop-beneficiary-data',
  templateUrl: './work-shop-beneficiary-data.component.html',
  styleUrls: ['./work-shop-beneficiary-data.component.scss']
})
export class WorkShopBeneficiaryDataComponent implements OnInit {
  @Output() activeStepFour: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeClasses: EventEmitter<void> = new EventEmitter<void>();
  @Output() backToPrevStep: EventEmitter<void> = new EventEmitter<void>();

  workShopBeneficiaryDataForm!: FormGroup;
  // beneficiaryTypeList: string[] = ['الأفراد', 'الجهات', 'كلاهما'];
  beneficiaryTypeList: string[] = ['ENTTY', 'INVDL', 'كلاهما'];
  genderList: string[] = ['MALGT', 'FELGT', 'كلاهما'];
  // genderList: string[] = ['ذكر', 'انثى', 'كلاهما'];
  // selectedFile: File | null = null;
  selectedFile: File | null = null;
  base64File: any | ArrayBuffer | null = null;
  fileName!: string;
  yes: boolean = true;
  no: boolean = false;
  constructor(private _formBuilder: FormBuilder, private _crudService: CrudService, private _http: HttpClient) {
    this.workShopBeneficiaryDataForm = this._formBuilder.group(
      {
        gender: ['', [Validators.required]],
        beneficiaryType: ['', [Validators.required]],
        isPrintCertificate: ['', [Validators.required]],
        numOfSeats: ['', [Validators.required]],
        uploadProfile: [null]
      }
    );
  }
  get gender() {
    return this.workShopBeneficiaryDataForm.get('gender');
  }
  get beneficiaryType() {
    return this.workShopBeneficiaryDataForm.get('beneficiaryType');
  }
  get isPrintCertificate() {
    return this.workShopBeneficiaryDataForm.get('isPrintCertificate');
  }
  get uploadProfile() {
    return this.workShopBeneficiaryDataForm.get('uploadProfile');
  }
  get numOfSeats() {
    return this.workShopBeneficiaryDataForm.get('numOfSeats');
  }
  ngOnInit(): void {
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // this.selectedFile = new Blob([file], { type: file.type });
      this.selectedFile = file;
      this.fileName = file.name;
      // =============================================
      const reader = new FileReader();
      // Convert file to Base64
      reader.onload = () => {
        this.base64File = reader.result; // This will be the base64 encoded file
        console.log('==============>>>>   ' + this.base64File)
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
      reader.readAsDataURL(file);

    }
  }
  onDeleteFile(): void {
    debugger
    this.selectedFile = null;
    this.fileName = '';
    this.workShopBeneficiaryDataForm.patchValue({
      uploadProfile: null
    });
    this.workShopBeneficiaryDataForm.get('uploadProfile')?.updateValueAndValidity();
  }
  beneficiaryDataSend() {
    console.log(this.selectedFile, this.selectedFile?.type)
    let formData = new FormData();
    formData.append('opportunityId', '1ea80e7c-0b30-40d6-8b76-fd4b074b98d0')
    formData.append('beneficiaryType', this.beneficiaryType?.value);
    formData.append('isPrintCertificate', this.isPrintCertificate?.value);
    formData.append('gender', this.gender?.value);
    formData.append('seats', this.numOfSeats?.value);
    if (this.selectedFile) {
      formData.append('oppProfileFile', this.base64File);
    }

    // const uploadUrl = 'http://pioneerseg.ddns.net:8001/api/TrainingWorkshopOpportunity/AddBeneficiaryData';
    const uploadUrl = 'http://pioneers-server:8001/api/TrainingWorkshopOpportunity/AddBeneficiaryData';

    this._http.post(uploadUrl, formData).subscribe(
      (response) => {
        console.log('Bl/ob upload successful:', response);
      },
      (error) => {
        console.error('Blob upload failed:', error);
      }
    );

    // this._crudService.newPost(uploadUrl, data).subscribe(res => {
    //   console.log(res);
    // })
  }
  printForm() {
    console.log(this.workShopBeneficiaryDataForm.value);
  }
  nextStep() {
    this.activeStepFour.emit(4);
    console.log('Beneficiary')
  }
  prevStep() {
    this.activeStepFour.emit(2);
    this.backToPrevStep.emit();

  }
  removeClassesinParent() {
    this.removeClasses.emit();
    console.log('removed-fromChild-3');
  }


}

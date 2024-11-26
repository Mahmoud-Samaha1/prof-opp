import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { professionalOpportunitiesForCompanyModel } from 'src/app/models/professionalOpportunitiesForCompanyMoel';
import { CrudService } from 'src/app/shared/services/crud.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-professional-opp',
  templateUrl: './professional-opp.component.html',
  styleUrls: ['./professional-opp.component.scss']
})
export class ProfessionalOppComponent implements OnInit {
  url: any = environment.apiUrl;
  professionalOpportunitiesForCompanyData!: professionalOpportunitiesForCompanyModel;
  constructor(private _crudService: CrudService) { }

  ngOnInit(): void {
    this.GetProfessionalOpportunitiesForCompany();
    // console.log(this.professionalOpportunitiesForCompanyData)
  }
  GetProfessionalOpportunitiesForCompany() {
    const endPoint = "api/ProfessionalOpportunity/GetProfessionalOpportunitiesForCompany";
    const params = {
      statusMasterCode: '',
      timeStatusMasterCode: '',
      isActive: '',
      oppType: '',
      pageNumber: 1,
      pageSize: 10
    };
    this._crudService.getOrByParams<professionalOpportunitiesForCompanyModel>(this.url, endPoint, params)
      .subscribe(
        res => {
          if (res.success) {
            this.professionalOpportunitiesForCompanyData = res.data
          }
        }
      );
  }
}

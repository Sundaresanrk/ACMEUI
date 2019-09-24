import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { State } from '../_models/state';
import { Country } from '../_models/country';
import { OfferApplication} from '../_models/offerApplication'
import { CommonService } from '../services/common.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public applicationForm: FormGroup;
  public countries:Country[] = [];
  public states:State[] = [];
  isSubmitted = false;

  constructor(private formbulider: FormBuilder,private commonService:CommonService,private router: Router,){}

  ngOnInit() {
    this.applicationForm = this.formbulider.group({
      PCode: ['', [Validators.required]],
      CountryName: ['', [Validators.required]],
      State: ['', [Validators.required]],
      FullName:  ['', [Validators.required]],
    });
    this.loadCountryDDL();
  }

  get formControls() { return this.applicationForm.controls; }

  loadCountryDDL()
  {
    this.commonService.getCountries().subscribe(res => {
      this.countries = res;
    });
  }

  loadStateDDL(){
    if(this.applicationForm.value.CountryName == 'Australia')
    {
      this.commonService.getStates().subscribe(res => {
        this.states = res;
      });
    }
    else{
      this.states = [];
    }
  }

  submitApplication() {
    this.isSubmitted = true;
    if (this.applicationForm.invalid) {
      return;
    }
    this.commonService.saveApplication(this.applicationForm.value).subscribe(res => {
      if (res) {
        this.router.navigate(['/success']);
      }
    });
  }
}

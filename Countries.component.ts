import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'countries',
  templateUrl: './Countries.component.html',
  styleUrls: ['./Countries.component.css'],
})
export class CountriesFormComponent {
  items = [
    { Name: 'Isreal', Mainland: 'Asia', PrimeMinister: 'Naftali Bennett' },
    { Name: 'USA', Mainland: 'North America', PrimeMinister: 'Joe Biden' },
    { Name: 'England', Mainland: 'Europe', PrimeMinister: 'Boris Johnson' },
  ];

  Name_add: string;
  Mainland_add: string;
  PrimeMinister_add: string;

  Name_Edit: string;
  Mainland_Edit: string;
  PrimeMinister_Edit: number;

  showAddForm: Boolean = false;
  showButtonAdd: Boolean = true;

  showUpdateForm: Boolean = false;

  valid_add: Boolean = true;

  DeleteCountry(c_index) {
    this.items.splice(c_index, 1);
  }

  UpdateCountry(i) {

    this.showUpdateForm=true;
    this.Name_Edit = i.Name;
    this.Mainland_Edit = i.Mainland;
    this.PrimeMinister_Edit = i.PrimeMinister;
  }

  onSvae(i) {
    i.Name = this.Name_Edit;
    i.Mainland = this.Mainland_Edit;
    i.PrimeMinister =this.PrimeMinister_Edit;
    this.showUpdateForm=false;
  }

  AddCountry() {
    this.showAddForm = true;
    this.showButtonAdd = false;
  }

  submit() {
    if (
      this.Name_add == null ||
      this.Mainland_add == null ||
      this.PrimeMinister_add == null
    ) {
      this.valid_add = false;
    }

    if (this.valid_add) {
      this.items.push({
        Name: this.Name_add,
        Mainland: this.Mainland_add,
        PrimeMinister: this.PrimeMinister_add,
      });

      this.showAddForm = false;
      this.showButtonAdd = true;
    } else {
      alert('Invalid or Empty values');
    }
    this.valid_add = true;
  }
}

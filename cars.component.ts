import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsFormComponent {
  items = [
    { Owner: 'James', Model: 'Volvo', Year: 2020 },
    { Owner: 'Mike', Model: 'BMW', Year: 2018 },
    { Owner: 'Grace', Model: 'Porsche', Year: 2021 },
  ];

  Owner_add: string;
  Model_add: string;
  Year_add: number;

  Owner_Edit: string;
  Model_Edit: string;
  Year_Edit: number;

  showAddForm: Boolean = false;
  showButtonAdd: Boolean = true;

  showUpdateForm: Boolean = false;

  valid_add: Boolean = true;

  DeleteCar(c_index) {
    this.items.splice(c_index, 1);
  }

  UpdateCar(i) {
    this.showUpdateForm = true;
    this.Owner_Edit = i.Owner;
    this.Model_Edit = i.Model;
    this.Year_Edit = i.Year;
  }

  onSvae(i) {
    i.Owner = this.Owner_Edit;
    i.Model = this.Model_Edit;
    i.Year = this.Year_Edit;
    this.showUpdateForm = false;
  }

  AddCar() {
    this.showAddForm = true;
    this.showButtonAdd = false;
  }

  submit() {
    if (
      this.Owner_add == null ||
      this.Model_add == null ||
      this.Year_add == null ||
      this.Year_add == 0
    ) {
      this.valid_add = false;
    }

    if (this.valid_add) {
      this.items.push({
        Owner: this.Owner_add,
        Model: this.Model_add,
        Year: this.Year_add,
      });

      this.showAddForm = false;
      this.showButtonAdd = true;
    } else {
      alert('Invalid or Empty values');
    }
    this.valid_add = true;
  }
}

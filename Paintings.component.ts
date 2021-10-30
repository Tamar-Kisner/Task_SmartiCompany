import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'paintings',
  templateUrl: './Paintings.component.html',
  styleUrls: ['./Paintings.component.css'],
})
export class PaintingsFormComponent {
  items = [
    { Name: 'The scream', Artist: ' Edvard Munch', Year: '1893-1910' },
    { Name: 'Starry night', Artist: 'Vincent Willem van Gogh', Year: '1889' },
    { Name: 'Monna Lisa', Artist: 'Leonardo da Vinci', Year: '1520' },
  ];

  Name_add: string;
  Artist_add: string;
  Year_add: string;

  Name_Edit: string;
  Artist_Edit: string;
  Year_Edit: number;

  showAddForm: Boolean = false;
  showButtonAdd: Boolean = true;

  showUpdateForm: Boolean = false;

  valid_add: Boolean = true;

  DeletePainting(p_index) {
    this.items.splice(p_index, 1);
  }

  UpdatePainting(i) {

    this.showUpdateForm=true;
    this.Name_Edit = i.Name;
    this.Artist_Edit = i.Artist;
    this.Year_Edit = i.Year;
  }

  onSvae(i) {
    i.Name = this.Name_Edit;
    i.Artist = this.Artist_Edit;
    i.Year = this.Year_Edit;
    this.showUpdateForm=false;
  }

  AddPainting() {
    this.showAddForm = true;
    this.showButtonAdd = false;
  }

  submit() {
    if (
      this.Name_add == null ||
      this.Artist_add == null ||
      this.Year_add == null
    ) {
      this.valid_add = false;
    }

    if (this.valid_add) {
      this.items.push({
        Name: this.Name_add,
        Artist: this.Artist_add,
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

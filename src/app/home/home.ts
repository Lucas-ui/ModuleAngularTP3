import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  btnText: string = 'Ajouter un item';
  objectifText: string = '';

  constructor(
    public activiteService: ActiviteService,
    private monRouteur: Router,
  ) {}

  // Lucas ROLLAND
  ajoutItem() {
    this.objectifText = this.objectifText.trim();
    if (this.objectifText) {
      this.activiteService.objectifs.push(this.objectifText);
      this.objectifText = '';
    }
    setTimeout(() => {
      this.monRouteur.navigate(['/about']);
    }, 1000);
  }

  consulter(index: number) {
    this.monRouteur.navigate(['/consultAct', index]);
  }
}

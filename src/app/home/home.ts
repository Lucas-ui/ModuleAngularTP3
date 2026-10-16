import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  nbItems: number = 4;
  btnText: string = 'Ajouter un item';
  objectifText: string = '';
  objectifs: string[] = [];
  private monRouteur: Router = new Router();

  // Lucas ROLLAND
  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }

  // Lucas ROLLAND
  ajoutItem() {
    this.objectifText = this.objectifText.trim();
    if (this.objectifText) {
      this.objectifs.push(this.objectifText);
      this.objectifText = '';
      this.nbItems = this.objectifs.length;
    }
    setTimeout(() => {
      this.monRouteur.navigate(['/about']);
    }, 1000);
  }

  supprimerItem(objectif: string) {
    const index = this.objectifs.indexOf(objectif);
    if (index > -1) {
      this.objectifs.splice(index, 1);
      this.nbItems = this.objectifs.length;
    }
  }

  supprimerTout() {
    this.objectifs = [];
    this.nbItems = 0;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [FormsModule],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActivite {
  index: number = -1;
  activite: string | undefined;
  enEdition: boolean = false;
  nouveauTitre: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activiteService: ActiviteService,
  ) {
    this.index = Number(this.route.snapshot.params['id']);
    this.activite = this.activiteService.objectifs[this.index];
  }

  // Lucas ROLLAND
  supprimeElem(index: number) {
    this.activiteService.removeItem(index);
    this.router.navigate(['/']);
  }

  modifier() {
    this.nouveauTitre = this.activite ?? '';
    this.enEdition = true;
  }

  sauvegarder() {
    this.nouveauTitre = this.nouveauTitre.trim();
    if (this.nouveauTitre) {
      this.activiteService.modifItem(this.index, this.nouveauTitre);
      this.activite = this.nouveauTitre;
    }
    this.enEdition = false;
  }

  retour() {
    this.router.navigate(['/']);
  }
}

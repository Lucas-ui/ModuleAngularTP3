import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiviteService {
  objectifs: string[] = ['Un element', 'deux elements', 'trois elements!'];

  // Lucas ROLLAND
  removeItem(index: number) {
    this.objectifs.splice(index, 1);
  }

  modifItem(index: number, titre: string) {
    this.objectifs[index] = titre;
  }
}

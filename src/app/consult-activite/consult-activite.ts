import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActivite {
  param1: string = '';

  constructor(private route: ActivatedRoute) {
    this.param1 = this.route.snapshot.params['id'];
  }
}

import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About implements OnInit {
  objectifs: string[] = [];

  constructor(private activiteService: ActiviteService) {}

  // Lucas ROLLAND
  ngOnInit() {
    this.objectifs = this.activiteService.objectifs;
  }
}

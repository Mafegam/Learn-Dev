import { Component, OnInit, inject } from '@angular/core';
import { DogsService } from '../../../Services/dogs.service';

import { NavbarComponent } from '../../home/navbar/navbar.component';

@Component({
  selector: 'app-dogs-facts',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dogs-facts.component.html',
  styleUrl: './dogs-facts.component.css'
})
export class DogsFactsComponent {

  dogsService = inject(DogsService);

  imageURL: any[] = [];
  dogFact: any[] = [];
  // dogFact: string = "";

  ngOnInit() {
    // DOG IMAGE
    this.dogsService.getImage().subscribe((response: any) => {
      this.imageURL = response.message;
    })

    // DOG FACT
    this.dogsService.getFact().subscribe((response: any) => {
      this.dogFact = response.data[0].attributes.body;
    })
  }

  onClick() {
    // DOG IMAGE
    this.dogsService.getImage().subscribe((response: any) => {
      this.imageURL = response.message;
      console.log(response);
    })

    // DOG FACT
    this.dogsService.getFact().subscribe((response: any) => {
      this.dogFact = response.data[0].attributes.body;
      console.log(response);
    })
  }



}



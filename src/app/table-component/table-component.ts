import { Component, OnInit, signal } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeService } from '../poke-service';

@Component({
  selector: 'app-table-component',
  standalone: false,
  templateUrl: './table-component.html',
  styleUrl: './table-component.css',
})
export class TableComponent implements OnInit {


  pokemons = signal<Pokemon[]>([]);

  constructor(private service: PokeService) {}

  ngOnInit(): void {
    this.service.getPokemons().subscribe(
          {
              next: json => this.pokemons.set(json)
          }
      );
  }

}

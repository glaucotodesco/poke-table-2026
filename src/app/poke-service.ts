import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
   apiUrl = "https://pokeapi.co/api/v2/pokemon";

   constructor(private http: HttpClient) { }

   getPokemons(): Observable<Pokemon[]>{
      return this.http.get<Pokemon[]>(this.apiUrl);
  }
}

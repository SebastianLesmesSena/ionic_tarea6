import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  listCategorys: any[] = [];
  listPokemones: any[] = [];
  listPokemonesOriginal: any[] =[];

  searchTerm: string = ''; // Define searchTerm to store the current search term

  constructor(public http: HttpClient, private router: Router) {}

  navigate(value: any) {
    let id = JSON.stringify(value);
    this.router.navigate(['./detail-noticia', { id }]);
    localStorage.setItem('NotisDetail', JSON.stringify(value));
  }

  ngOnInit() {
    this.http.get('../../assets/noticias/pokemones.json').subscribe(data => {
      this.listCategorys = JSON.parse(JSON.stringify(data))[0].pokemones.categorys;
      this.listPokemones = JSON.parse(JSON.stringify(data))[0].detailPokemones;
      this.listPokemonesOriginal = JSON.parse(JSON.stringify(data))[0].detailPokemones;
    });
  }

  // Método para filtrar los pokemones
  filterPokemones(searchTerm: string): void {
    if (!searchTerm.trim()) {
      // Si el término de búsqueda está vacío, muestra todas las tarjetas nuevamente.
      this.listPokemones = this.listPokemonesOriginal; 
    } else {
      // Filtra los pokemones que coincidan con el término de búsqueda.
      this.listPokemones = this.listPokemonesOriginal.filter(pokemon =>
        pokemon.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
  
}
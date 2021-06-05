import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Hawkeye'];
  heroeBorrado: string | boolean = false;

  borrarHeroe () {
    this.heroeBorrado = this.heroes.shift() || false;
  }
}

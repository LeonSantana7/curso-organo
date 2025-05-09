import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  favorito: boolean= false;

  alternarFavorito(){
    this.favorito = !this.favorito;
  }
  
  livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    imagem: "https://m.media-amazon.com/images/I/81D2d6LqZdS._AC_UF1000,1000_QL80_.jpg"
  }


}

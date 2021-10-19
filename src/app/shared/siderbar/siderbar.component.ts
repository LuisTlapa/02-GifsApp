import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html'
})
export class SiderbarComponent implements OnInit {
  
  get historial(){
    return this.gifsService.historial
  }
  buscar(termino:string){
    this.gifsService.buscarGifs(termino)

  }
  constructor( private gifsService:GifsService) { }

  ngOnInit(): void {
  }

}

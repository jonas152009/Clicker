import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
})
export class App {
    private router = inject(Router);
  constructor(){
    if(sessionStorage.getItem("name") != null){
      this.router.navigate(['game']);
    }
  }
}

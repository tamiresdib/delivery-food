import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PageRoutes } from './enums/page-routes.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private readonly router: Router
  ){
  }

  public ngOnInit(): void {
      void this.router.navigate([PageRoutes.HOME])
  }
}

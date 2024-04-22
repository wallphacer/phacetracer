import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'phacetraders';
  data: any;

  constructor(private client: HttpClient) {
    const headers = new HttpHeaders({
    })
    const options = {
      headers: headers
    }

    this.data = client.get("https://api.spacetraders.io/v2/my/ships", options).subscribe({
      next: data => {
        this.data = data;
        console.log(this.data)
      },
      error: err => console.log(err),
    });

  }
}

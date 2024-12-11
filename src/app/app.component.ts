import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mock-together';


  constructor( ) {
  }
}


interface TribeProject {
  name: string,
  startDate: Date,
  endDate: Date,
  budget: number,
  customer: string;
}

enum Role {
  FRONTEND,
  BACKEND,
  NAVIGATOR,
}

interface TribeMember {
  firstName: string
  lastName: string
  project?: TribeProject
  roles: Array<Role>
  hobbies: Array<string>;
  skills: Array<string>
}

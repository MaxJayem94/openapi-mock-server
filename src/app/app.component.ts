import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TribeMemberComponent } from './components/tribe-member/tribe-member.component';
import { TribeMemberMock } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TribeMemberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  tribeMembers: TribeMemberMock[] = [];

  // TODO APP CONFIG

  /*  constructor(private tribeMemberService: TribeMemberMockService) {}*/

  ngOnInit(): void {
    /* this.tribeMemberService.tribeMembersGet().subscribe((members) => {
      this.tribeMembers = members.tribeMembers!;
      console.log(this.tribeMembers);
    });*/
  }
}

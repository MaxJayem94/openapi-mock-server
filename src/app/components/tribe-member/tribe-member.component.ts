import { CurrencyPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TribeMemberMock } from '../../models';

@Component({
  selector: 'app-tribe-member',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, NgIf, NgForOf],
  templateUrl: './tribe-member.component.html',
  styleUrl: './tribe-member.component.scss',
})
export class TribeMemberComponent {
  @Input() member!: TribeMemberMock;
}

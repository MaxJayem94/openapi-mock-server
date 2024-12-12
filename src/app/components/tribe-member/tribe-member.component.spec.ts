import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TribeMemberComponent } from './tribe-member.component';

describe('TribeMemberComponent', () => {
  let component: TribeMemberComponent;
  let fixture: ComponentFixture<TribeMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TribeMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TribeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

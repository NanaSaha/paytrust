import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WithdrawSuccessPage } from './withdraw-success.page';

describe('WithdrawSuccessPage', () => {
  let component: WithdrawSuccessPage;
  let fixture: ComponentFixture<WithdrawSuccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WithdrawSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

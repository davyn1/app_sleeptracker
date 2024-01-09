import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SleepyLogPage } from './sleepy-log.page';

describe('SleepyLogPage', () => {
  let component: SleepyLogPage;
  let fixture: ComponentFixture<SleepyLogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SleepyLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeialThemeComponent } from './speial-theme.component';

describe('SpeialThemeComponent', () => {
  let component: SpeialThemeComponent;
  let fixture: ComponentFixture<SpeialThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeialThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeialThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirmtComponent } from './kirmt.component';

describe('KirmtComponent', () => {
  let component: KirmtComponent;
  let fixture: ComponentFixture<KirmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KirmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KirmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

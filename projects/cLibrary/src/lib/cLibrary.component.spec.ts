import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cLibraryComponent } from './cLibrary.component';

describe('cLibraryComponent', () => {
  let component: cLibraryComponent;
  let fixture: ComponentFixture<cLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [cLibraryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(cLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

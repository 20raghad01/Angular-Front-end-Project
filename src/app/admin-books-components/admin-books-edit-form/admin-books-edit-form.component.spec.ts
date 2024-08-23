import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooksEditFormComponent } from './admin-books-edit-form.component';

describe('AdminBooksEditFormComponent', () => {
  let component: AdminBooksEditFormComponent;
  let fixture: ComponentFixture<AdminBooksEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBooksEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBooksEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooksFormComponent } from './admin-books-form.component';

describe('AdminBooksFormComponent', () => {
  let component: AdminBooksFormComponent;
  let fixture: ComponentFixture<AdminBooksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBooksFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBooksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

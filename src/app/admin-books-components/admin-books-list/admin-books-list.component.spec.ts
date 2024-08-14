import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooksListComponent } from './admin-books-list.component';

describe('AdminBooksListComponent', () => {
  let component: AdminBooksListComponent;
  let fixture: ComponentFixture<AdminBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBooksListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthorListComponent } from './admin-author-list.component';

describe('AdminAuthorListComponent', () => {
  let component: AdminAuthorListComponent;
  let fixture: ComponentFixture<AdminAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAuthorListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

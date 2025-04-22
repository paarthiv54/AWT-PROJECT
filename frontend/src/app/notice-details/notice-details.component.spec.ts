import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeDetailsComponent } from './notice-details.component';

describe('NoticeDetailsComponent', () => {
  let component: NoticeDetailsComponent;
  let fixture: ComponentFixture<NoticeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

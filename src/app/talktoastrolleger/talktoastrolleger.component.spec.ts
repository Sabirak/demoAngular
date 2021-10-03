import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalktoastrollegerComponent } from './talktoastrolleger.component';

describe('TalktoastrollegerComponent', () => {
  let component: TalktoastrollegerComponent;
  let fixture: ComponentFixture<TalktoastrollegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalktoastrollegerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalktoastrollegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

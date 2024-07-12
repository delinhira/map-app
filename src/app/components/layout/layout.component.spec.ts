import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterTestingModule } from '@angular/router/testing';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.overrideComponent(LayoutComponent, {
      set: {
        imports: [
          MatIconModule,
          MatToolbarModule,
          MatButtonModule,
          MatSidenavModule,
          MatListModule,
          RouterTestingModule,
        ],
      },
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have navItems defined', () => {
    expect(component.navItems.length).toBeGreaterThan(0);
  });

  it('should have correct initial sidenav width', () => {
    expect(component.sideNavWidth()).toBe('80px');
  });

  it('should toggle isMenuCollapsed when handleClickMenu is called', () => {
    const initialCollapseState = component.isMenuCollapsed();
    component.handleClickMenu();
    fixture.detectChanges();
    expect(component.isMenuCollapsed()).toBe(!initialCollapseState);
  });

  it('should change sidenav width when handleClickMenu is called', () => {
    const initialWidth = component.sideNavWidth();
    component.handleClickMenu();
    fixture.detectChanges();
    const newWidth = component.sideNavWidth();
    expect(newWidth).not.toBe(initialWidth);
  });

  it('should render menu button and handle click', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
    spyOn(component, 'handleClickMenu');
    button.triggerEventHandler('click', null);
    expect(component.handleClickMenu).toHaveBeenCalled();
  });
});

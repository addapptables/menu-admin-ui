import { NgModule } from '@angular/core';
import { AddapptableMenuComponent } from './addapptable-menu.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuItemsLinkComponent } from './components/menu-items-link/menu-items-link.component';
import { MenuGroupComponent } from './components/menu-items-link/components/menu-group/menu-group.component';
import { MenuSingleComponent } from './components/menu-items-link/components/menu-single/menu-single.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { MenuStore } from './store/menu.store';
import { RouterModule } from '@angular/router';
import { SharedPrintMenuComponent } from './components/menu-items-link/components/shared-print-menu/shared-print-menu.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { CollapseButtonMobileComponent } from './components/collapse-button-mobile/collapse-button-mobile.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';
import { AddapptablePerfectScrollbarModule } from '@addapptables/perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    AddapptablePerfectScrollbarModule,
    ReduxRegisterModule.forFeature('addapptablemenu', { sidebar: MenuStore }),
  ],
  declarations: [
    AddapptableMenuComponent,
    CollapseButtonMobileComponent,
    MenuHeaderComponent,
    MenuItemsLinkComponent,
    MenuGroupComponent,
    MenuSingleComponent,
    MenuUserComponent,
    SharedPrintMenuComponent
  ],
  exports: [
    AddapptableMenuComponent,
    MenuUserComponent,
    MenuItemsLinkComponent,
    MenuHeaderComponent,
    CollapseButtonMobileComponent
  ]
})
export class AddapptableMenuModule { }

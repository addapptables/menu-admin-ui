# ADDAPPTABLES menu

[See demo](http://addapptables.com/admin/dashboard)

## Getting Started
To get started, lets install the package thru npm:

```
npm i @addapptables/menu --S
```

Install peer dependencies

```
npm i
@addapptables/responsive
@addapptables/ngrx-actions
@addapptables/perfect-scrollbar
@ngrx/store
@ngx-translate/core --S
```

## Configuration

Configure @ngx-translate/core see [link](https://github.com/ngx-translate/core)

## How to use

```typescript

import { MenuModule } from '@addapptables/menu';
@NgModule({
  imports: [MenuModule]
})
export class YourModule { }


import { MenuModel, MenuHeaderModel, MenuUserModel } from '@addapptables/menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    menus: MenuModel[] = [
    {
        id: '1',
        class: 'material-icons',
        value: 'dashboard',
        title: 'menu.dashboard',
        isOpen: false,
        multiOption: false,
        url: '/admin/dashboard',
        exact: true,
    },
    {
        id: '2',
        class: 'material-icons',
        value: 'chrome_reader_mode',
        title: 'menu.forms',
        isOpen: false,
        multiOption: true,
        exact: true,
        children: [
            {
                id: '3',
                value: 'BF',
                title: 'menu.form.basicForm',
                isOpen: false,
                multiOption: false,
                url: '/admin/forms/basic-form',
                exact: true
            }
        ]
    }]

    header: MenuHeaderModel = {
        companyName: 'ADDAPPTABLES',
        logoUrl: 'assets/images/logo/addaptables.svg'
    };

    user: MenuUserModel = {
        initialName: 'MG',
        fullName: 'Mateo Guerra',
        email: 'dev@addapptables.com',
        avatarUrl: 'assets/images/avatars/Velazquez.jpg'
    };
}
```

```html
<addapptable-menu>
  <addapptable-menu-header [header]="header">
  </addapptable-menu-header>
  <addapptable-menu-user [user]="user">
  </addapptable-menu-user>
  <addapptable-menu-items-link [menus]="menus">
  </addapptable-menu-items-link>
</addapptable-menu>
```

```scss
@import '~@angular/material/theming';
@import '~@addapptables/menu/_addapptables-menu.theme.scss';

$addapptable-app-primary: mat-palette($mat-teal, 800);
$addapptable-app-accent:  mat-palette($mat-pink, 800, A100, 100);
$addapptable-app-warn: mat-palette($mat-red);
$addapptable-app-theme: mat-light-theme($addapptable-app-primary, $addapptable-app-accent, $addapptable-app-warn);
$addapptable-theme-variables: (
    text: white,
    transition-time: 250ms,
    border-radius: 5px
);

body.theme-default {
    @include addapptable-menu($addapptable-app-theme, $addapptable-theme-variables);
}
```
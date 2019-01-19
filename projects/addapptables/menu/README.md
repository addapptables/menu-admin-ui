# ADDAPPTABLES menu

## Getting Started
To get started, lets install the package thru npm:

```
npm i @addapptables/menu --S
```

Install peer dependencies

```
npm i @addapptables/responsive @addapptables/ngrx-actions @addapptables/perfect-scrollbar @ngrx/store @ngx-translate/core --S
```

## How to use

```typescript
import { MenuModel, MenuHeaderModel, MenuUserModel } from '@addapptables/menu';

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
```

```html
<addapptable-menu>
  <addapptable-menu-header [header]="header">
  </addapptable-menu-header>
  <addapptable-menu-user [user]="user">
  </addapptable-menu-user>
  <addapptable-menu-items-link [menus]="menus$ | async">
  </addapptable-menu-items-link>
</addapptable-menu>
```
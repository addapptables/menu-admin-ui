import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReponsiveService } from '@addapptables/responsive';
import { MenuModel } from '../../../../models/menu.model';
import { MenuOpened } from '../../../../actions/menu.actions';

@Component({
    selector: 'addapptable-shared-print-menu',
    templateUrl: './shared-print-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'menu-items'
    }
})
export class SharedPrintMenuComponent {
    @Input()
    menus: MenuModel[];

    constructor(private readonly _store: Store<any>,
        private readonly reponsiveService: ReponsiveService) { }

    openCloseMenu() {
        const isMobile = this.reponsiveService.isMobileSubject.getValue();
        isMobile && this._store.dispatch(new MenuOpened());
    }
}

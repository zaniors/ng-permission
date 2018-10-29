import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPermissionDirective } from './directive/permission.directive';

@NgModule({
    declarations: [
        AppPermissionDirective,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        AppPermissionDirective,
    ],
    providers: [],
})
export class PublicModule { }

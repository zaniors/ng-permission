import { PermissionType } from './../enum/permission-type.enum';
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PermissionService } from '../service/permission.service';

@Directive({
    selector: '[appPermission]',
})
/**
 * 使用装饰器指令，在HTML模板中，更容易管理用户的DOM权限
 */
export class AppPermissionDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,
        private permissionService: PermissionService,
    ) {}

    @Input() set appPermission(permissionType: PermissionType) {
        this.isGranted(permissionType);
    }

    /**
     * 调用者传入权限值，有权限则创建该装饰器的DOM，否则清除掉
     * @param permissionType 权限类型
     */
    private isGranted(permissionType: PermissionType) {
        if (this.permissionService.isGranted(permissionType)) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            return;
        }
        this.viewContainerRef.clear();
    }
}

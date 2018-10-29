import { PermissionBase } from '../public/base/permission.base';
import { PermissionType } from '../public/enum/permission-type.enum';

/** 构造超级管理员的所属权限 */
export class AdminPermission extends PermissionBase {
    constructor() {
        super();
        this.permissions = [
            PermissionType.CREATE,
            PermissionType.READ,
            PermissionType.UPDATE,
            PermissionType.OTHER
        ];
    }
}

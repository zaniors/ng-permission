import { PermissionBase } from '../public/base/permission.base';
import { PermissionType } from '../public/enum/permission-type.enum';

/** 构造未知用户的所属权限 */
export class UnknownPermission extends PermissionBase {
    constructor() {
        super();
        this.permissions = [
            PermissionType.READ
        ];
    }
}

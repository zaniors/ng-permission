import { PermissionType } from '../enum/permission-type.enum';
/** 抽象出一个基本权限类 */
export abstract class PermissionBase {
    public permissions: PermissionType[];
    constructor() {}
}

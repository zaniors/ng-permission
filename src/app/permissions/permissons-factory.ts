import { PermissionBase } from '../public/base/permission.base';
import { Role } from '../public/enum/role.enum';
import { SuperAdminPermission } from './super-admin.permission';
import { AdminPermission } from './admin.permission';
import { UnknownPermission } from './unknown.permission';
import { UserPermission } from './user.permission';
export class PermissionFactory {
    static instance: PermissionBase;
    constructor() { }

    public static getInstance() {
        if (this.instance) {
            return this.instance;
        }

        const role = localStorage.getItem('role');
        switch (role) {
            case Role.SUPERADMIN:
                this.instance = new SuperAdminPermission();
                break;
            case Role.ADMIN:
                this.instance = new AdminPermission();
                break;
            case Role.USER:
                this.instance = new UserPermission();
                break;
            case Role.UNKNOWN:
                this.instance = new UnknownPermission();
                break;
            default:
                this.instance = new UnknownPermission();
                break;
        }
        return this.instance;
    }
}

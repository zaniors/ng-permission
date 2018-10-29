import { Injectable } from '@angular/core';
import { PermissionFactory } from 'src/app/permissions/permissons-factory';
import { PermissionType } from '../enum/permission-type.enum';
import { Role } from '../enum/role.enum';

@Injectable({
    providedIn: 'root'
})

export class PermissionService {
    constructor() {}

    /**
     * 判断当前角色是否有此权限，有此权限则为true，否则false
     * @param permission 传入权限类型
     */
    isGranted(permission: PermissionType): boolean {
        const permissions = PermissionFactory.getInstance().permissions;

        for (const perm of permissions) {
            if (perm === permission) {
                return true;
            }
        }
        return false;
    }

    /**
     * 定义角色类型，保存到localstorage中
     * @param role 设置当前用户角色类型
     */
    authAs(role: Role) {
        role = role === null ? Role.UNKNOWN : role;
        localStorage.setItem('role', role);
    }
}

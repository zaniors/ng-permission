import { Component, OnInit } from '@angular/core';
import { Role } from './public/enum/role.enum';
import { PermissionService } from './public/service/permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  roleType: Role;
  constructor(
    private permissionService: PermissionService,
  ) {
  }

  ngOnInit(): void {
    const currentRoleType = localStorage.getItem('role') as Role;
    this.roleType = currentRoleType ? currentRoleType : Role.UNKNOWN;
    this.permissionService.authAs(this.roleType);
  }

  public changeRoleType(event) {
    const role = event.target.value;
    this.permissionService.authAs(role);
    location.reload();
  }
}

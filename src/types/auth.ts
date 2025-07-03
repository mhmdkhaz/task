import type { PermissionDTO } from "./user";

export interface ILoginRequest {
  email: string;
  password: string;

  firstName?: string;
  lastName?: string;
  profileImageURL?: string;
  roleNames?: [];
  permissions?: PermissionDTO[];
}

export interface ILoginDTO {
  id?: string;
  firstName?: string;
  lastName?: string;
  profileImageURL?: string;
  email?: string;
  roleNames?: string[];
  permissions?: PermissionDTO[];
}

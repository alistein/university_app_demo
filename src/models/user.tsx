import { LegacyRef } from "react";

export interface IUser {
  fullName?: string;
  userID?: number;
  Points?: number;
  deleteUser?: (userID: number) => void;
}

export interface IUserList {
  users: IUser[];
  deleteUserHandler: (userID: number) => void;
}

export interface IUserEdit extends IUser {
  index?: number;
  modalNameRef?: LegacyRef<HTMLInputElement>;
  modalPointsRef?: LegacyRef<HTMLInputElement>;
}

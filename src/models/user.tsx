import { LegacyRef, ReactNode } from "react";

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

export interface IUserEdit {
  index?: number;
  modalNameRef?: LegacyRef<HTMLInputElement>;
  modalPointsRef?: LegacyRef<HTMLInputElement>;
}

export interface IProps {
  addUser: (userObject: IUser) => void;
}

export interface IButton {
  children? : string | ReactNode;
  bgcolor? : string;
  color? : string;
  width? :string;
  onClick?: () => void;
}

export interface ICard {
  className?: string;
  children: any;
  maxWidth?: ReactNode;
  bgColor?: ReactNode;
  padding?: ReactNode;
  margin?: ReactNode;

}

export interface Iinput {
  type: string;
  className?: "string";
  name?: string;
  placeholder?: string;
  value?: string;
  Iref?: LegacyRef<HTMLInputElement> | undefined;
  min?: string;
  max?: string;
  defaultValue?: string,
  disabled?: boolean;
}

export interface IModal {
  onClick?: () => void;
  readonly placeHolderName?: string;
  placeHolderPoints?: string;
  userID:number;
  setIsOpenProp:(isOpen: boolean) => void;
}
export interface IOverlay {
  onClick: () => void;
}

type Status = "Success" | "Danger" | "Info" | "Warning";
export interface IToast {
  children: string,
  status: Status,
  users?: IUser[];

}

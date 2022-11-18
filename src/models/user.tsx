export interface IUser {
  fullName: string;
  userID?: number;
  Points: number;
  deleteUser?: (userID: number) => void;
}

export interface IUserList {
  users: IUser[],
  deleteUserHandler: (userID: number) => void;
}
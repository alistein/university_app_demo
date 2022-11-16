export interface IUser {
  fullName: string;
  userID?: number;
  Points: number;
  deleteUser?: (userID: number) => void;
}

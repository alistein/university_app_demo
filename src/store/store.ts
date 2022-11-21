import { IUser,IUserEdit } from "../models/user";

export enum ActionKind {
    ADD = 'ADD',
    ADD_LOC = 'ADD_LOC',
    DELETE = 'DELETE',
    EDIT = 'EDIT'
  }

  export interface Action {
    type: ActionKind;
    payload?: IUserEdit & IUser
  }
  
  export const actionHandler = (state:IUser[], action:Action):any => {
    const {type,payload} = action;
    switch(type){
     case ActionKind.ADD:
       return [payload, ...state];
     case ActionKind.ADD_LOC:
       return payload;
     case ActionKind.DELETE:
       return payload;  
     case ActionKind.EDIT:
      const index = payload?.index;
      state[index!].Points = Number(payload?.modalPointsRef);
      return [...state];
    }
   }
  
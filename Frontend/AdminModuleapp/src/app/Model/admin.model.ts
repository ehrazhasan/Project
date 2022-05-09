import {User} from "./user";

export interface Admin {
  id: number;
  ngoId: string;
  name: string;
  address: string;
  contact: string;
  email: string;
  status: number;
  user: User;
}

import {User} from "./user";

export interface AdminNgoUsers {
  id: number;
  ngoId: string;
  name: string;
  address: string;
  contact: string;
  email: string;
  status: number;
  user: User;
}

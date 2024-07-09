import { user_role, user_status } from "../auth/auth.constant";

export type TUser = {
  name: string;
  email: string;
  role:keyof typeof user_role;
  password: string;
  phone: string;
  address: string;
  status: keyof typeof user_status
}
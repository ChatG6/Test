import { ReactNode } from "react";

export interface notifyBox {
  message: string;
  setDisplay: (state: boolean) => void;
}
export interface formTypes {
  notify: (msg: string) => void;
}
interface user{
  username:string,
  password:string
}
export interface tableTypes {
  data: user[];
}

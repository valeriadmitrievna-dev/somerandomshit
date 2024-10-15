import { roomIcons } from '../lib/constants';
import { Homespace } from "./homespaces";

export interface Room {
  id: string;
  name: string;
  imageIcon: keyof typeof roomIcons;
  homespaceId: Homespace["id"];
}

//import from 0-classroom
import ClassRoom from './0-classroom';
//export functions
export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}

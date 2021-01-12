import initComponentOnPage from '../components';
import RoomReservationForm from './room-reservation-form';

export default function initRoomReservationFormOnPage() {    
    initComponentOnPage(RoomReservationForm, '.js-room-reservation-form');
}
export type TBooking = {
  id: number
  userId: number
  spaceId: number
  date: string
  timeFrom: string
  timeTo: string
  comment: string
  status: 'pending' | 'approved' | 'rejected' | 'cancelled'
}

export type TBookingDTO = {
    spaceId: number;
    comment: string;
    status: 'pending' | 'approved' | 'rejected' | 'cancelled';
    date: string;
    timeFrom: string;
    timeTo: string;
}
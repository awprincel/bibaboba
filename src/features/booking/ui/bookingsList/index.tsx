import { useGetBookingsQuery } from "../../../../entities/booking/api/bookingsApi";
import { BookingCard } from "../bookingCard";

export const BookingsList = () => {
  const { data: bookingsData } = useGetBookingsQuery();

  return (
    <div>
      {bookingsData?.map((booking) => (
        <BookingCard booking={booking} key={booking.id} />
      ))}
    </div>
  );
};

import type { RootStata } from "../../../../app/provider/store/store";
import { useUpdateBookingStatusMutation } from "../../../../entities/booking/api/bookingsApi";
import type { TBookingCardProps } from "../../model/index.types";
import { useSelector } from "react-redux";
import styles from './index.module.scss'

export const BookingCard = ({ booking }: TBookingCardProps) => {
  const auth = useSelector((state: RootStata) => state.auth);
  const [updateStatus] = useUpdateBookingStatusMutation();

  const isManager = auth.user?.user?.role === "manager";

  const handleStatusChange = async (newStatus: "approved" | "rejected") => {
    try {
      await updateStatus({
        id: booking.id,
        status: newStatus,
      }).unwrap();
    } catch (e) {
      console.error("Ошибка смены статуса", e);
    }
  };

  const statusClassName = `${styles["booking-card__status"]} ${
    styles[`booking-card__status--${booking.status}`]
  }`;

  return (
    <div className={styles["booking-card"]}>
      <div className={styles["booking-card__header"]}>
        <h2 className={styles["booking-card__id"]}>Бронь #{booking.id}</h2>
        <span className={statusClassName}>{booking.status}</span>
      </div>

      <p className={styles["booking-card__info"]}>
        <strong>Дата:</strong> {booking.date}
      </p>
      <p className={styles["booking-card__info"]}>
        <strong>Время:</strong> {booking.timeFrom} — {booking.timeTo}
      </p>
      <p className={styles["booking-card__info"]}>
        <strong>Комментарий:</strong> {booking.comment || "—"}
      </p>

      {isManager && booking.status == "pending" && (
        <div className={styles["booking-card__actions"]}>
          <button
            onClick={() => handleStatusChange("approved")}
            className={`${styles["booking-card__btn"]} ${styles["booking-card__btn--approve"]}`}
          >
            Одобрить
          </button>
          <button
            onClick={() => handleStatusChange("rejected")}
            className={`${styles["booking-card__btn"]} ${styles["booking-card__btn--reject"]}`}
          >
            Отклонить
          </button>
        </div>
      )}
    </div>
  );
};

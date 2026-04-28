import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBookingMutation } from "../../../../entities/booking/api/bookingsApi";
import { bookingSchema, type TBookingFormData } from "../../model/schema";
import styles from './index.module.scss'

export const BookingsForm = ({ spaceId }: { spaceId: number }) => {
  const [createBooking, { isLoading }] = useCreateBookingMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TBookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: TBookingFormData) => {
    try {
      await createBooking({
        spaceId,
        ...data,
        comment: data.comment || "",
        status: 'pending',
      }).unwrap();
      
      alert("Успешно забронировано!");
      reset();
    } catch (e) {
      alert("Ошибка при бронировании");
    }
  };

  return (
    <form className={styles["booking-form"]} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles["booking-form__title"]}>Создание бронирования</h1>
      
      <div className={styles["booking-form__field"]}>
        <input 
          type="date" 
          className={`${styles["booking-form__input"]} ${errors.date ? styles["booking-form__input--error"] : ""}`}
          {...register("date")} 
        />
        {errors.date && <span className={styles["booking-form__error"]}>{errors.date.message}</span>}
      </div>

      <div className={styles["booking-form__field"]}>
        <input 
          type="time" 
          className={`${styles["booking-form__input"]} ${errors.timeFrom ? styles["booking-form__input--error"] : ""}`}
          {...register("timeFrom")} 
        />
        {errors.timeFrom && <span className={styles["booking-form__error"]}>{errors.timeFrom.message}</span>}
      </div>

      <div className={styles["booking-form__field"]}>
        <input 
          type="time" 
          className={`${styles["booking-form__input"]} ${errors.timeTo ? styles["booking-form__input--error"] : ""}`}
          {...register("timeTo")} 
        />
        {errors.timeTo && <span className={styles["booking-form__error"]}>{errors.timeTo.message}</span>}
      </div>

      <div className={styles["booking-form__field"]}>
        <textarea 
          placeholder="Комментарий" 
          className={styles["booking-form__textarea"]}
          {...register("comment")} 
        />
      </div>
      
      <button 
        type="submit" 
        disabled={isLoading}
        className={`${styles["booking-form__submit"]} ${isLoading ? styles["booking-form__submit--loading"] : ""}`}
      >
        {isLoading ? "" : "Подтвердить бронь"}
      </button>
    </form>
  );
};

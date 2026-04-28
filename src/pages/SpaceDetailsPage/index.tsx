import { useParams } from "react-router";
import { useGetSpaceQuery } from "../../entities/space/api/spacesApi";
import { BookingsForm } from "../../features/booking/ui/bookingForm";
import styles from "./index.module.scss";

const SpaceDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const spaceId = Number(id);
  
  const { data: space, isLoading } = useGetSpaceQuery(spaceId);

  if (isLoading) return <div className={styles.details} style={{color: 'white'}}>Загрузка...</div>;
  if (!space) return <div className={styles.details} style={{color: 'white'}}>Пространство не найдено</div>;

  return (
    <div className={styles.details}>
      <div className={styles.details__container}>
        <header className={styles.details__header}>
          <h1 className={styles.details__title}>
            Бронирование: <span>{space.title}</span>
          </h1>
          
          <div className={styles.details__meta}>
            <div className={styles["details__price-badge"]}>
              {space.pricePerHour} ₽ <span>/ час</span>
            </div>
          </div>
        </header>

        <section>
          <p className={styles.details__description}>
            {space.description || "Описание для этого пространства еще не добавлено."}
          </p>
        </section>
        
        <hr className={styles.details__divider} />
        
        <BookingsForm spaceId={spaceId} />
      </div>
    </div>
  );
};

export default SpaceDetailsPage;

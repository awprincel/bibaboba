import { useParams } from "react-router";
import { useGetSpaceQuery } from "../../entities/space/api/spacesApi";
import { BookingsForm } from "../../features/booking/ui/bookingForm";

const SpaceDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const spaceId = Number(id);
  
  const { data: space, isLoading } = useGetSpaceQuery(spaceId);

  if (isLoading) return <div>Загрузка...</div>;
  if (!space) return <div>Пространство не найдено</div>;

  return (
    <div>
      <h1>Бронирование: {space.title}</h1>
      <p>{space.description}</p>
      <p>Цена: {space.pricePerHour} руб/час</p>
      
      <hr />
      
      <BookingsForm spaceId={spaceId} />
    </div>
  );
};

export default SpaceDetailsPage

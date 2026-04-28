import { useGetSpacesQuery } from "../../api/spacesApi";
import { SpaceItem } from "../spaceItem";
import styles from './index.module.scss'


export const SpacesList = () => {
    const { isLoading, data: spacesData } = useGetSpacesQuery();

    if (isLoading) return <div style={{ color: 'white' }}>Загрузка...</div>;

    return (
        <div className={styles["spaces-list"]}>
            {spacesData?.map(space => (
                <SpaceItem key={space.id} space={space} />
            ))}
        </div>
    );
};

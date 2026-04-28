import { useNavigate } from "react-router";
import type { ISpace } from "../../model/types";
import styles from './index.module.scss'

interface ISpaceItemProps {
    space: ISpace;
}

export const SpaceItem = ({ space }: ISpaceItemProps) => {
    const navigate = useNavigate();

    return (
        <div className={styles["space-item"]}>
            <h2 className={styles["space-item__title"]}>{space.title}</h2>
            
            <p className={styles["space-item__price"]}>
                Цена за час: <span>{space.pricePerHour} ₽</span>
            </p>
            
            {space.description && (
                <p className={styles["space-item__description"]}>
                    {space.description}
                </p>
            )}

            <button 
                className={styles["space-item__btn"]}
                onClick={() => navigate(`/spaces/${space.id}`)}
            >
                Забронировать
            </button>
        </div>
    );
};

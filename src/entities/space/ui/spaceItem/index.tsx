import { useNavigate } from "react-router";
import type { ISpace } from "../../model/types";
import styles from './index.module.scss'
import { useDeleteSpaceMutation } from "../../api/spacesApi";
import toast from "react-hot-toast";

interface ISpaceItemProps {
    space: ISpace;
}

export const SpaceItem = ({ space }: ISpaceItemProps) => {
    const navigate = useNavigate();
    const [deleteSpace] = useDeleteSpaceMutation()

    const deleteHandler = () => {
        deleteSpace(space.id)
        toast.success("Успешно удалено")
    }

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
                className={styles["space-item__btn_primary"]}
                onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/spaces/${space.id}`)
                }}
            >
                Забронировать
            </button>
            <button
                className={styles["space-item__btn_reject"]}
                onClick={(e) => {
                    e.stopPropagation()
                    deleteHandler()
                }}
            >
                Удалить
            </button>
        </div>
    );
};

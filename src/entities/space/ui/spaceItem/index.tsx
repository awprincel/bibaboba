import type { ISpace } from "../../model/types"

interface ISpaceItemProps {
    space: ISpace
}

export const SpaceItem = ({ space }: ISpaceItemProps) => {

    return (
        <div>
            <h2>Название: {space.title}</h2>
            <h2>Рейтинг: {space.rating}</h2>
            <h2>Цена за час: {space.pricePerHour}</h2>
            <p>Описание: {space.description}</p>
            <h2>Емкость: {space.capacity}</h2>
            <h2></h2>
        </div>
    )
}
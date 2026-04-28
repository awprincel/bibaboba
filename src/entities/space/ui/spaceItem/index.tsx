import { useState } from "react"
import type { ISpace } from "../../model/types"
import { UpdateSpaceForm } from "../../../../features/space/ui/updateForm"

interface ISpaceItemProps {
    space: ISpace
}

export const SpaceItem = ({ space }: ISpaceItemProps) => {
    const [show, setShow] = useState<boolean>(false)

    return (
        <div>
            <h2>Название: {space.title}</h2>
            <h2>Рейтинг: {space.rating}</h2>
            <h2>Цена за час: {space.pricePerHour}</h2>
            <p>Описание: {space.description}</p>
            <h2>Емкость: {space.capacity}</h2>
            <button onClick={() => setShow(!show)}>{show ? "Убрать" : "Показать"}</button>
            {show && <UpdateSpaceForm space={space} setShow={setShow}/>}
        </div>
    )
}
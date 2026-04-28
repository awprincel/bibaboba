import { Controller, useForm } from "react-hook-form"
import { spaceSchema, type TSpaceSchema } from "../../model/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUpdateSpaceMutation } from "../../../../entities/space/api/spacesApi"
import type { ISpace } from "../../../../entities/space/model/types"

interface IUpdateSpaceFormProps {
    space: ISpace;
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const UpdateSpaceForm = ({ space, setShow }: IUpdateSpaceFormProps) => {
    const [updateSpace] = useUpdateSpaceMutation()
    const { control, handleSubmit, formState: { errors } } = useForm<TSpaceSchema>({
        resolver: zodResolver(spaceSchema),
        defaultValues: {
            title: space.title,
            capacity: space.capacity,
            description: space.description,
            rating: space.rating,
            zoneType: space.zoneType,
            pricePerHour: space.pricePerHour,
            images: space.images,
        }
    })

    const submitHandler = (data: TSpaceSchema) => {
        updateSpace({ id: space.id, data }).unwrap()
        setShow(prev => !prev)
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Controller
                control={control}
                name="title"
                render={({ field }) => <input {...field} placeholder="Введите заголовок" />}
            />
            {errors.title && (<span>{errors.title.message}</span>)}

            <Controller
                control={control}
                name="zoneType"
                render={({ field }) =>
                    <select {...field}>
                        <option value="open-space">open-space</option>
                        <option value="meeting-room">meeting-room</option>
                        <option value="private-office">private-office</option>
                    </select>}
            />
            {errors.zoneType && (<span>{errors.zoneType.message}</span>)}

            <Controller
                control={control}
                name="pricePerHour"
                render={({ field }) => <input {...field} placeholder="Введите цену за час" onChange={(e) => field.onChange(Number(e.target.value))} />}
            />
            {errors.pricePerHour && (<span>{errors.pricePerHour.message}</span>)}

            <Controller
                control={control}
                name="capacity"
                render={({ field }) => <input {...field} placeholder="Введите емкость" onChange={(e) => field.onChange(Number(e.target.value))} />}
            />
            {errors.capacity && (<span>{errors.capacity.message}</span>)}

            <Controller
                control={control}
                name="rating"
                render={({ field }) => <input {...field} placeholder="Введите рейтинг" onChange={(e) => field.onChange(Number(e.target.value))} />}
            />
            {errors.rating && (<span>{errors.rating.message}</span>)}

            <Controller
                control={control}
                name="description"
                render={({ field }) => <input {...field} placeholder="Введите описание" />}
            />
            {errors.description && (<span>{errors.description.message}</span>)}

            <button type="submit">Обновить</button>
        </form>
    )
}
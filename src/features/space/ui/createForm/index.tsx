import { Controller, useForm } from "react-hook-form"
import { spaceSchema, type TSpaceSchema } from "../../model/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateSpaceMutation } from "../../../../entities/space/api/spacesApi"

export const CreateSpaceForm = () => {
    const [createSpace] = useCreateSpaceMutation()
    const { control, handleSubmit, reset, formState: { errors } } = useForm<TSpaceSchema>({
        resolver: zodResolver(spaceSchema),
    })

    const submitHandler = (data: TSpaceSchema) => {
        createSpace(data).unwrap()
        reset()
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

            <button type="submit">Создать</button>
        </form>
    )
}
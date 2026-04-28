import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { spaceSchema, type TSpaceSchema } from "../../model/schema"
import { useCreateSpaceMutation } from "../../../../entities/space/api/spacesApi"
import "./space-form.scss"
import toast from "react-hot-toast"

export const CreateSpaceForm = () => {
    const [createSpace, { isLoading }] = useCreateSpaceMutation()

    const { control, handleSubmit, reset, formState: { errors } } = useForm<TSpaceSchema>({
        resolver: zodResolver(spaceSchema),
        defaultValues: {
            title: "",
            capacity: undefined,
            description: "",
            images: undefined,
            pricePerHour: undefined,
            rating: undefined,
            zoneType: "open-space"
        }
    })

    const submitHandler = async (data: TSpaceSchema) => {
        try {
            await createSpace(data).unwrap()
            toast.success("Успешно создано")
            reset()
        } catch (e) {
            console.error(e)
            toast.error("Ошибка создания")
        }
    }

    return (
        <form className="space-form" onSubmit={handleSubmit(submitHandler)}>
            <h2 className="space-form__title">Новое пространство</h2>

            <div className="space-form__field">
                <label className="space-form__label">Название</label>
                <Controller
                    control={control}
                    name="title"
                    render={({ field }) => (
                        <input
                            {...field}
                            className={`space-form__input ${errors.title ? 'space-form__input--error' : ''}`}
                            placeholder="Введите название"
                        />
                    )}
                />
                {errors.title && <span className="space-form__error">{errors.title.message}</span>}
            </div>

            <div className="space-form__field">
                <label className="space-form__label">Тип зоны</label>
                <Controller
                    control={control}
                    name="zoneType"
                    render={({ field }) => (
                        <select {...field} className="space-form__input">
                            <option value="open-space">Open Space</option>
                            <option value="meeting-room">Meeting Room</option>
                            <option value="private-office">Private Office</option>
                        </select>
                    )}
                />
            </div>

            <div className="space-form__field">
                <label className="space-form__label">Рейтинг</label>
                <Controller
                    control={control}
                    name="rating"
                    render={({ field }) => (
                        <input
                            type="number"
                            {...field}
                            className={`space-form__input ${errors.pricePerHour ? 'space-form__input--error' : ''}`}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                    )}
                />
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
                <div className="space-form__field">
                    <label className="space-form__label">Цена/час</label>
                    <Controller
                        control={control}
                        name="pricePerHour"
                        render={({ field }) => (
                            <input
                                type="number"
                                {...field}
                                className={`space-form__input ${errors.pricePerHour ? 'space-form__input--error' : ''}`}
                                onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                        )}
                    />
                </div>

                <div className="space-form__field">
                    <label className="space-form__label">Мест</label>
                    <Controller
                        control={control}
                        name="capacity"
                        render={({ field }) => (
                            <input
                                type="number"
                                {...field}
                                className={`space-form__input ${errors.capacity ? 'space-form__input--error' : ''}`}
                                onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                        )}
                    />
                </div>
            </div>

            <div className="space-form__field">
                <label className="space-form__label">Описание</label>
                <Controller
                    control={control}
                    name="description"
                    render={({ field }) => (
                        <textarea
                            {...field}
                            className={`space-form__textarea ${errors.description ? 'space-form__input--error' : ''}`}
                            placeholder="Расскажите об удобствах..."
                        />
                    )}
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`space-form__submit ${isLoading ? 'space-form__submit--loading' : ''}`}
            >
                {isLoading ? "" : "Опубликовать"}
            </button>
        </form>
    )
}

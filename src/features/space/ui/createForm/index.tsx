import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { spaceSchema, type TSpaceSchema } from "../../model/schema";
import { useCreateSpaceMutation } from "../../../../entities/space/api/spacesApi";
import toast from "react-hot-toast";
import styles from './index.module.scss'

export const CreateSpaceForm = () => {
    const [createSpace, { isLoading }] = useCreateSpaceMutation();

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
    });

    const submitHandler = async (data: TSpaceSchema) => {
        try {
            await createSpace(data).unwrap();
            toast.success("Успешно создано");
            reset();
        } catch (e) {
            console.error(e);
            toast.error("Ошибка создания");
        }
    };

    return (
        <form className={styles["space-form"]} onSubmit={handleSubmit(submitHandler)}>
            <h2 className={styles["space-form__title"]}>Новое пространство</h2>

            <div className={styles["space-form__field"]}>
                <label className={styles["space-form__label"]}>Название</label>
                <Controller
                    control={control}
                    name="title"
                    render={({ field }) => (
                        <input
                            {...field}
                            className={`${styles["space-form__input"]} ${errors.title ? styles["space-form__input--error"] : ""}`}
                            placeholder="Например: Уютный лофт с видом на парк"
                        />
                    )}
                />
                {errors.title && <span className={styles["space-form__error"]}>{errors.title.message}</span>}
            </div>

            <div className={styles["space-form__field"]}>
                <label className={styles["space-form__label"]}>Тип зоны</label>
                <Controller
                    control={control}
                    name="zoneType"
                    render={({ field }) => (
                        <select {...field} className={styles["space-form__input"]}>
                            <option value="open-space">Open Space</option>
                            <option value="meeting-room">Meeting Room</option>
                            <option value="private-office">Private Office</option>
                        </select>
                    )}
                />
            </div>

            <div className={styles["space-form__field"]}>
                <label className={styles["space-form__label"]}>Рейтинг</label>
                <Controller
                    control={control}
                    name="rating"
                    render={({ field }) => (
                        <input
                            type="number"
                            {...field}
                            className={`${styles["space-form__input"]} ${errors.rating ? styles["space-form__input--error"] : ""}`}
                            placeholder="Оценка от 1 до 5"
                            onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                    )}
                />
                {errors.rating && <span className={styles["space-form__error"]}>{errors.rating.message}</span>}
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
                <div className={styles["space-form__field"]}>
                    <label className={styles["space-form__label"]}>Цена/час</label>
                    <Controller
                        control={control}
                        name="pricePerHour"
                        render={({ field }) => (
                            <input
                                type="number"
                                {...field}
                                className={`${styles["space-form__input"]} ${errors.pricePerHour ? styles["space-form__input--error"] : ""}`}
                                placeholder="Напр: 450"
                                onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                        )}
                    />
                    {errors.pricePerHour && <span className={styles["space-form__error"]}>{errors.pricePerHour.message}</span>}
                </div>

                <div className={styles["space-form__field"]}>
                    <label className={styles["space-form__label"]}>Мест</label>
                    <Controller
                        control={control}
                        name="capacity"
                        render={({ field }) => (
                            <input
                                type="number"
                                {...field}
                                className={`${styles["space-form__input"]} ${errors.capacity ? styles["space-form__input--error"] : ""}`}
                                placeholder="Напр: 12"
                                onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                        )}
                    />
                    {errors.capacity && <span className={styles["space-form__error"]}>{errors.capacity.message}</span>}
                </div>
            </div>

            <div className={styles["space-form__field"]}>
                <label className={styles["space-form__label"]}>Описание</label>
                <Controller
                    control={control}
                    name="description"
                    render={({ field }) => (
                        <textarea
                            {...field}
                            className={`${styles["space-form__textarea"]} ${errors.description ? styles["space-form__input--error"] : ""}`}
                            placeholder="Опишите преимущества: быстрый Wi-Fi, кофе-машина, наличие проектора..."
                        />
                    )}
                />
                {errors.description && <span className={styles["space-form__error"]}>{errors.description.message}</span>}
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`${styles["space-form__submit"]} ${isLoading ? styles["space-form__submit--loading"] : ""}`}
            >
                {isLoading ? "" : "Опубликовать пространство"}
            </button>
        </form>
    );
};

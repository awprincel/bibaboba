import z from "zod"

export const spaceSchema = z.object({
    title: z.string().min(1, "Заголовок обязателен"),
    zoneType: z.enum(['open-space', 'meeting-room', 'private-office']),
    pricePerHour: z.number().positive("Цена должна быть больше 0"),
    capacity: z.number().positive("Вместимость должна быть целым числом"),
    rating: z.number().min(0, "Минимум 0").max(5, 'Максимум 4'),
    description: z.string(),
    images: z.array(z.string().url("Каждая картинка должна быть валидным URL")).nullable().optional(),
});

export type TSpaceSchema = z.infer<typeof spaceSchema>
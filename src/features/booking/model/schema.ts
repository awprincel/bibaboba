import { z } from "zod";

export const bookingSchema = z.object({
  date: z.string().min(1, "Выберите дату"),
  timeFrom: z.string().min(1, "Выберите время начала"),
  timeTo: z.string().min(1, "Выберите время окончания"),
  comment: z.string().optional(),
}).refine((data) => data.timeTo > data.timeFrom, {
  message: "Время окончания должно быть позже начала",
  path: ["timeTo"],
});

export type TBookingFormData = z.infer<typeof bookingSchema>;

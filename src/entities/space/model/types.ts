export interface ISpace {
    id: number
    title: string
    zoneType: 'open-space' | 'meeting-room' | 'private-office'
    pricePerHour: number
    capacity: number
    rating: number
    description: string
    images?: string[] | null
}

export type TSpaceDTO = Omit<ISpace, 'id'>
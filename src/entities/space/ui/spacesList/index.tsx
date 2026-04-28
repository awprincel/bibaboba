import { useGetSpacesQuery } from "../../api/spacesApi"
import { SpaceItem } from "../spaceItem"

export const SpacesList = () => {
    const { isLoading, data: spacesData } = useGetSpacesQuery()

    return (
        <div>
            {
                spacesData?.map(space => (
                    <SpaceItem space={space} />
                ))
            }
        </div>
    )
}
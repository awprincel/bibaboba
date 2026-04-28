import Loader from "../../../../shared/ui/loader"
import { useGetSpacesQuery } from "../../api/spacesApi"
import { SpaceItem } from "../spaceItem"

export const SpacesList = () => {
    const { isLoading, data: spacesData } = useGetSpacesQuery()

    if (isLoading) return <Loader />

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
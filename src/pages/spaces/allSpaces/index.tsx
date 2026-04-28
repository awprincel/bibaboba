import { useAppSelector } from "../../../app/provider/store/hooks"
import { SpacesList } from "../../../entities/space/ui/spacesList"
import { CreateSpaceForm } from "../../../features/space/ui/createForm"

const SpacesPage = () => {
    const user = useAppSelector(state => state.auth.user)
    return (
        <div>
            {user?.role === "manager" && <CreateSpaceForm />}
            <SpacesList />
        </div>
    )
}
export default SpacesPage
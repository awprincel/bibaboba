import { useAppSelector } from "../../app/provider/store/hooks"

const ProfilePage = () => {
    const user = useAppSelector(state => state.auth.user)
    return (
        <div>
            <h2>Имя: {user?.name}</h2>
            <h2>Почта: {user?.email}</h2>
            <h2>Роль: {user?.role}</h2>
            <h2>Статус: {user?.isActive ? "Активный" : "Не активный"}</h2>
        </div>
    )
}

export default ProfilePage
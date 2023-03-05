import { useNavigate } from "react-router-dom"
import { DropdownItem } from "src/features"

const useGamesDropdownData = (): DropdownItem[] => {
    const navigate = useNavigate()

    return [
        {
            id: 0,
            group: '1',
            label: 'Бесплатные',
            action: () => navigate('#')
        },
        {
            id: 1,
            group: '1',
            label: 'Платные',
            action: () => navigate('#')
        },
        {
            id: 2,
            group: '2',
            label: 'Простые',
            action: () => navigate('#')
        },
        {
            id: 3,
            group: '2',
            label: 'Новинки',
            action: () => navigate('#')
        },
        {
            id: 4,
            group: '2',
            label: 'Облачные',
            action: () => navigate('#')
        },
        {
            id: 5,
            group: '3',
            label: 'Торговая площадка',
            action: () => navigate('#')
        }
    ]
}

export { useGamesDropdownData }
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    setSortBy: (sortBy: string) => void;
    sort: string;
}

function SortSelector({ setSortBy, sort }: Props) {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ];

    const currentSort = sortOrders.find((item) => item.value === sort);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSort?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((item) => (
                    <MenuItem
                        onClick={() => setSortBy(item.value)}
                        key={item.value}
                        value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default SortSelector;

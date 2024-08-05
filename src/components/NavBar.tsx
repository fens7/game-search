import { HStack, Image } from '@chakra-ui/react';
import Logo from '../assets/logo1.png';
import ThemeSwitch from './ThemeSwitch';
import SearchInput from './SearchInput';

interface Props {
    onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={Logo} boxSize="60px" />
            <SearchInput onSearch={onSearch} />
            <ThemeSwitch />
        </HStack>
    );
}

export default NavBar;

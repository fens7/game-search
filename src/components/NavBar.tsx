import { HStack, Image } from '@chakra-ui/react';
import Logo from '../assets/logo1.png';
import ThemeSwitch from './ThemeSwitch';
import SearchInput from './SearchInput';

function NavBar() {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={Logo} boxSize="60px" />
            <SearchInput />
            <ThemeSwitch />
        </HStack>
    );
}

export default NavBar;

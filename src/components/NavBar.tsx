import { HStack, Image } from '@chakra-ui/react';
import Logo from '../assets/logo1.png';
import ThemeSwitch from './ThemeSwitch';

function NavBar() {
    return (
        <HStack justifyContent="space-between">
            <Image src={Logo} boxSize="60px" />
            <ThemeSwitch />
        </HStack>
    );
}

export default NavBar;

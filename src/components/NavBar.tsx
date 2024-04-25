import { HStack, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo1.png';

function NavBar() {
    return (
        <HStack>
            <Image src={Logo} boxSize="60px" />
            <Text margin="0">Search games to play</Text>
        </HStack>
    );
}

export default NavBar;

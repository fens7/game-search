import { HStack, Icon } from '@chakra-ui/react';
import {
    FaWindows,
    FaApple,
    FaPlaystation,
    FaXbox,
    FaLinux,
    FaAndroid,
} from 'react-icons/fa';
import { Platform } from '../hooks/useGames';
import { IconType } from 'react-icons';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';

interface Props {
    platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
    const platformIcons: { [key: string]: IconType } = {
        pc: FaWindows,
        mac: FaApple,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        android: FaAndroid,
        linux: FaLinux,
    };

    return (
        <HStack marginY={'10px'}>
            {platforms.map((platform) => (
                <Icon as={platformIcons[platform.slug]} margin={0} color="gray.500" />
            ))}
        </HStack>
    );
}

export default PlatformIconList;

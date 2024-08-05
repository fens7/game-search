import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

function ThemeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack>
            <Switch
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
                colorScheme="blue"
            />
            <Text whiteSpace="nowrap" margin="0" marginRight="10px">
                Dark Mode
            </Text>
        </HStack>
    );
}

export default ThemeSwitch;

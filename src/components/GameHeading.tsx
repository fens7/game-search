import { GameQuery } from '../App';
import { Heading } from '@chakra-ui/react';

interface Props {
    gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
    const heading = `${gameQuery.platform?.name || ''} ${
        gameQuery.genre?.name || ''
    } Games`;
    return (
        <Heading fontSize="5xl" as="h1">
            {heading}
        </Heading>
    );
}

export default GameHeading;

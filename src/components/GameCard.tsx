import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import GameRating from './GameRating';

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    console.log(game);

    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <GameRating score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;

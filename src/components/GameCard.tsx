import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import GameRating from './GameRating';
import getCroppedImg from '../services/image-url';

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={getCroppedImg(game.background_image)} />
            <CardBody>
                <HStack justifyContent={'space-between'} marginBottom={3}>
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <GameRating score={game.metacritic} />
                </HStack>
                <Heading fontSize="2xl">{game.name}</Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;

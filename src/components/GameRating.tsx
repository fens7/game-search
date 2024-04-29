import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

function GameRating({ score }: Props) {
    const color = score >= 75 ? 'lightgreen' : score >= 45 ? 'yellow' : 'red';
    return (
        <Badge color={color} fontSize={'14px'} paddingX={2}>
            {score}
        </Badge>
    );
}

export default GameRating;

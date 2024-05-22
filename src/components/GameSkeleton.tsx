import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

function GameSkeleton() {
    return (
        <Card width="320px" margin="6px" borderRadius={10} overflow="hidden">
            <Skeleton height="270px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}

export default GameSkeleton;

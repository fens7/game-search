import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

function GameSkeleton() {
    return (
        <Card margin="6px" borderRadius={10} overflow="hidden">
            <Skeleton height="250px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}

export default GameSkeleton;

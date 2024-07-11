import { Card, Skeleton } from '@chakra-ui/react';

function GenreSkeleton() {
    return (
        <Card paddingY="5px" marginY="10px" borderRadius={10} overflow="hidden">
            <Skeleton height="21px" />
        </Card>
    );
}

export default GenreSkeleton;

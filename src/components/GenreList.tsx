import { Button, Heading, HStack, Image, List } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImg from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';

interface Props {
    setSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, setSelectedGenre }: Props) {
    const { data, isLoading } = useGenres();

    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <Heading fontSize="2xl" marginBottom="3">
                Genres
            </Heading>
            <List padding={0}>
                {isLoading &&
                    skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
                {data.map((genre) => (
                    <HStack paddingY="5px" key={genre.id}>
                        <Image
                            objectFit="cover"
                            boxSize={'32px'}
                            borderRadius={8}
                            src={getCroppedImg(genre.image_background)}
                        />
                        <Button
                            whiteSpace="normal"
                            textAlign="left"
                            onClick={() => setSelectedGenre(genre)}
                            variant="link"
                            fontSize="lg"
                            margin={0}
                            fontWeight={
                                genre.id === selectedGenre?.id ? 'bold' : 'normal'
                            }>
                            {genre.name}
                        </Button>
                    </HStack>
                ))}
            </List>
        </>
    );
}

export default GenreList;

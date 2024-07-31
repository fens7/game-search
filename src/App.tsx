import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

    console.log(selectedPlatform);

    return (
        <>
            <Grid
                templateAreas={{
                    base: `'nav' 'main'`,
                    lg: `'nav nav' 'aside main'`,
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '200px 1fr ',
                }}>
                <GridItem area="nav">
                    <NavBar />
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" paddingX={5}>
                        <GenreList
                            setSelectedGenre={(genre) => setSelectedGenre(genre)}
                            selectedGenre={selectedGenre}
                        />
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <HStack spacing={5} paddingLeft={4} marginBottom={5}>
                        <PlatformSelector
                            selectedPlatform={selectedPlatform}
                            setSelectedPlatform={(platform) =>
                                setSelectedPlatform(platform)
                            }
                        />
                        <SortSelector />
                    </HStack>
                    <GameGrid
                        selectedPlatform={selectedPlatform}
                        selectedGenre={selectedGenre}
                    />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;

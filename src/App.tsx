import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
    return (
        <>
            <Grid
                templateAreas={{
                    base: `'nav' 'main'`,
                    lg: `'nav nav' 'aside main'`, //1024px
                }}>
                <GridItem area="nav" bg={'orange'}>
                    Nav
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" bg={'blue'}>
                        Aside
                    </GridItem>
                </Show>
                <GridItem area="main" bg={'black'}>
                    Main
                </GridItem>
            </Grid>
        </>
    );
}

export default App;

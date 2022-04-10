import Container from '@mui/material/Container';
import { ProductsCatalog } from '@components/products/ProductsCatalog';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Products = () => {
    return (
        <Container >
            <Title variant="h2">Productos</Title>
            <ProductsCatalog />
        </Container>

    )
}


const Title = styled(Typography)`
    margin: 2rem 0;
`;
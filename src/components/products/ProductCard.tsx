import styled from "@emotion/styled"
import { IProduct } from "@models/Product.model"
import { Typography } from "@mui/material"
import { FC } from "react"

interface IProps {
    data: IProduct
}


export const ProductCard: FC<IProps> = ({ data: { name, image, description, category } }) => {
    return (
        <LayoutCard>
            <ImageProduct src={image} alt={name} />
            <ContentCard>
                <Typography variant="h3">{name}</Typography>
                <Typography variant="subtitle1">{category}</Typography>
                <Paragraph>{description}</Paragraph>

            </ContentCard>
        </LayoutCard>
    )
}

const LayoutCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 15rem;
    grid-gap: 0.5rem;
    border-bottom: 0.1rem solid #ccc;
    background-color: #fff;
`;

const ImageProduct = styled.img`
    width: 90%;
    height: 90%;
    object-fit: cover;
    margin-left: auto;
    margin: auto;
`;

const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
`;

const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #333;
    margin: 0.5rem 0;
`;

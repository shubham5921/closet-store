import { Card as MuiCard, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { ContentItem, PricingOption } from '../../api/types';


interface ICard {
    item: ContentItem;
}

const Card: React.FC<ICard> = ({ item }) => {
    const priceDisplayMap: Record<PricingOption, React.ReactNode> = {
        [PricingOption.PAID]: `$${item.price?.toFixed(2)}`,
        [PricingOption.FREE]: 'FREE',
        [PricingOption.VIEW_ONLY]: 'VIEW ONLY',
    };
    return (
        <MuiCard>
            <CardMedia
                component="img"
                height="350"
                image={item.imagePath}
                alt={item.title}
            />
            <CardContent sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box>
                    <Typography gutterBottom variant="h5">
                        {item.creator}
                    </Typography>
                    <Typography variant="body2">
                        {item.title}
                    </Typography>
                </Box>
                <Typography variant='subtitle2'>{priceDisplayMap[item.pricingOption]}</Typography>
            </CardContent>
        </MuiCard>
    )
};

export default Card;
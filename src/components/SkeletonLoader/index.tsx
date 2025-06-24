import React from 'react';
import { Box, Grid, Skeleton } from '@mui/material';

interface SkeletonLoaderProps {
    count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ count = 8 }) => {
    return (
        <Grid container spacing={5} mt={5}>
            {Array.from({ length: count }).map((_, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                    <Box
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 2,
                            boxShadow: 1,
                            overflow: 'hidden',
                            height: '100%',
                        }}
                    >
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={350}
                            animation="wave"
                        />


                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 2
                        }}>
                            <Box flex={1}>
                                <Skeleton height={12} width="20%" animation="wave" sx={{ mb: 1 }} />
                                <Skeleton height={12} width="50%" animation="wave" />
                            </Box>
                            <Skeleton height={12} width="20%" animation="wave" />
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default SkeletonLoader;

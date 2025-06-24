import { Box, Typography } from "@mui/material";
import { vars } from "../../theme/variables";

const NoDataFound = () => {
    return (
        <Box sx={{
            textAlign: 'center',
            display: 'flex',
            py: 10,
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            justifyContent: 'center'
        }}>
            <svg width={150} fill={vars.colorSecondary} viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.59998C11.3372 2.59998 10.8 3.13723 10.8 3.79998V7.39998C10.8 8.06272 11.3372 8.59998 12 8.59998C12.6627 8.59998 13.2 8.06272 13.2 7.39998V3.79998C13.2 3.13723 12.6627 2.59998 12 2.59998ZM5.4 13.9999H3V17.6V18.9999V19C3 19.5523 3.44771 20 4 20H20C20.5523 20 21 19.5523 21 19V17.6H21V13.9999H18.6V17.6H5.4V13.9999ZM20.6544 7.63649C21.123 7.16786 21.123 6.40807 20.6544 5.93944C20.1858 5.47081 19.426 5.47081 18.9573 5.93944L17.1189 7.77791C16.6502 8.24654 16.6502 9.00634 17.1189 9.47497C17.5875 9.9436 18.3473 9.9436 18.8159 9.47497L20.6544 7.63649ZM3.3456 5.93944C2.87697 6.40807 2.87697 7.16786 3.3456 7.63649L5.18407 9.47497C5.6527 9.9436 6.4125 9.9436 6.88113 9.47497C7.34976 9.00634 7.34976 8.24654 6.88113 7.77791L5.04265 5.93944C4.57402 5.47081 3.81423 5.47081 3.3456 5.93944Z"></path>
            </svg>
            <Typography variant="h3">No Results Found</Typography>
            <Typography variant="caption">Check the spelling, or try a different search term.</Typography>
        </Box>
    )
};

export default NoDataFound;
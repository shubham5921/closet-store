import { Box, Container, useMediaQuery } from "@mui/material";
import { vars } from "../../theme/variables";
import SearchBar from "../SearchBar";
import Header from "../Header";
import Filters from "../Filters";

interface IComponentWrapper {
    children: React.ReactNode;
}

const ComponentWrapper: React.FC<IComponentWrapper> = ({ children }) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <>
            <Header isMobile={isMobile} />
            <Box sx={{
                background: vars.colorBackgroundPrimary,
                height: 'calc(100vh - 64px)',
                py: {
                    xs: 2,
                    sm: 3
                }
            }}>
                <Container maxWidth="xl" sx={{
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    {!isMobile && <SearchBar />}
                    <Filters isMobile={isMobile} />
                    {children}
                </Container>
            </Box>

        </>
    )
};

export default ComponentWrapper;

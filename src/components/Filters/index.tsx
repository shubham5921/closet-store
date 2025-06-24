import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Typography
} from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    filterData,
    resetFilters,
    setPricingOptions
} from "../../store/contentsSlice";
import { RootState } from "../../store";
import { vars } from "../../theme/variables";
import { PricingOption } from "../../api/types";
import { updateQueryParam } from "../../utility/updateQueryParam";
import { FilterKey } from "../../store/types";


const FILTERS: { key: FilterKey; label: string }[] = [
    { key: "paid", label: "Paid" },
    { key: "free", label: "Free" },
    { key: "viewOnly", label: "View Only" }
];

interface IFilters {
    isMobile: boolean
}

const Filters: React.FC<IFilters> = ({ isMobile }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pricingOptions = useSelector(
        (state: RootState) => state.closetData.pricingOptions
    );


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const activeOptions: FilterKey[] = FILTERS
            .map(({ key }) => key)
            .filter((key) => params.get(key) === "true");

        dispatch(setPricingOptions(activeOptions));
    }, [location.search, dispatch]);

    const handleCheckboxChange = (option: any) => {
        let newOptions: PricingOption[];
        if (pricingOptions.includes(option)) {
            newOptions = pricingOptions.filter((opt: any) => opt !== option);
        } else {
            newOptions = [...pricingOptions, option];
        }

        dispatch(setPricingOptions(newOptions));
        dispatch(filterData());

        const updates: Record<string, string | null> = {
            [option]: newOptions.includes(option) ? "true" : null
        };

        updateQueryParam(navigate, location, updates);
    };

    const handleReset = () => {
        dispatch(resetFilters());
        dispatch(filterData());

        const updates: Record<string, string | null> = {};
        FILTERS.forEach(({ key }) => {
            updates[key] = null;
        });

        updateQueryParam(navigate, location, updates);
    };

    const isAnyFilterSelected = pricingOptions.length > 0;

    return (
        <Box
            sx={{
                background: vars.filtersBg,
                py: {
                    xs: 1,
                    sm: 2
                },
                px: 2,
                gap: {
                    xs: "1rem",
                    sm: "2rem"
                },
                borderRadius: "6px",
                alignItems: "center",
                display: {
                    md: "flex"
                }
            }}
        >
            {!isMobile && <Typography>Pricing Option</Typography>}

            <Box flex={1} sx={{
                display: {
                    xs: "flex",
                },
                justifyContent: {
                    xs: "space-between"
                }
            }}>
                <FormControl variant="standard">
                    <FormGroup row sx={{ gap: { md: "0.5rem" } }}>
                        {FILTERS.map((filter) => (
                            <FormControlLabel
                                key={filter.key}
                                control={
                                    <Checkbox
                                        checked={pricingOptions.includes(filter.key)}
                                        onChange={() => handleCheckboxChange(filter.key)}
                                    />
                                }
                                label={filter.label}
                            />
                        ))}
                    </FormGroup>
                </FormControl>

                <Button
                    variant="text"
                    sx={{ ml: "auto" }}
                    disabled={!isAnyFilterSelected}
                    onClick={handleReset}
                >
                    Reset
                </Button>
            </Box>
        </Box>
    );
};

export default React.memo(Filters);

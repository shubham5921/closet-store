import { IconButton, InputAdornment, TextField } from "@mui/material";
import { vars } from "../../theme/variables";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { filterData, setKeyword } from "../../store/contentsSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { updateQueryParam } from "../../utility/updateQueryParam";

const SearchBar: React.FC = () => {
    const keyword = useSelector((state: RootState) => state.closetData.keyword);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const urlKeyword = params.get('keyword');
        if (urlKeyword !== null && urlKeyword !== keyword) {
            dispatch(setKeyword(urlKeyword));
        }
    }, [location.search, dispatch]);

    const handleClear = useCallback(() => {
        dispatch(setKeyword(''));
        dispatch(filterData());
        updateQueryParam(navigate, location, { keyword: '' });
    }, [dispatch, navigate, location]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newKeyword = e.target.value;
        dispatch(setKeyword(newKeyword));
        dispatch(filterData());
        updateQueryParam(navigate, location, { keyword: newKeyword });
    };


    return (
        <TextField
            variant="outlined"
            fullWidth
            placeholder="Find the items you’re looking for"
            value={keyword}
            onChange={handleChange}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            {keyword && (
                                <IconButton onClick={handleClear} sx={{ color: vars.searchBarColor }}>
                                    <CloseOutlinedIcon
                                        sx={{
                                            width: {
                                                xs: 14,
                                                sm: 20
                                            },
                                            height: {
                                                xs: 14,
                                                sm: 20
                                            }
                                        }} />
                                </IconButton>
                            )}
                            <IconButton disableRipple sx={{ color: vars.searchBarColor, pointerEvents: 'none' }}>
                                <SearchOutlinedIcon sx={{
                                    width: {
                                        xs: 14,
                                        sm: 20
                                    },
                                    height: {
                                        xs: 14,
                                        sm: 20
                                    }
                                }} />
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
        />
    )
}

export default React.memo(SearchBar);
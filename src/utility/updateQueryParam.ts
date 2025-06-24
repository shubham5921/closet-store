import { useLocation, useNavigate } from "react-router-dom";

export const updateQueryParam = (
    navigate: ReturnType<typeof useNavigate>,
    location: ReturnType<typeof useLocation>,
    updates: Record<string, string | null>
) => {
    const params = new URLSearchParams(location.search);

    Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === '') {
            params.delete(key);
        } else {
            params.set(key, value);
        }
    });

    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
};

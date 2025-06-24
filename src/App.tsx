import { Grid } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import NoDataFound from './components/NoDataFound';
import SkeletonLoader from './components/SkeletonLoader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { useEffect, useState } from 'react';
import { fetchClosetData } from './store/contentsSlice';
import { ITEMS_PER_PAGE } from './utility';
import Card from './components/Card';
import ComponentWrapper from './components/ComponentWrapper';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredItems = [], loading } = useSelector((state: RootState) => state.closetData);
  const [visibleItems, setVisibleItems] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    dispatch(fetchClosetData());
  }, [dispatch]);

  useEffect(() => {
    if (filteredItems?.length) {
      setVisibleItems(filteredItems.slice(0, ITEMS_PER_PAGE));
      setHasMore(filteredItems.length > ITEMS_PER_PAGE);
    } else {
      setVisibleItems([]);
      setHasMore(false);
    }
  }, [filteredItems]);

  const loadMoreData = () => {
    setTimeout(() => {
      const nextLength = visibleItems.length + ITEMS_PER_PAGE;
      const newItems = filteredItems.slice(0, nextLength);
      setVisibleItems(newItems);
      setHasMore(nextLength < filteredItems.length);
    }, 100);
  };

  const getData = () => {
    if (loading) {
      return <SkeletonLoader />
    } else if (filteredItems.length > 0) {
      return (
        <InfiniteScroll
          dataLength={visibleItems.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={<SkeletonLoader />}
        >
          <Grid container spacing={5}>
            {visibleItems.map((item) => (
              <Grid key={item.id} size={{
                xs: 12, sm: 6, md: 4, lg: 3
              }}>
                <Card item={item} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      )
    } else {
      return <NoDataFound />
    }
  }


  return (
    <ComponentWrapper>
      {getData()}
    </ComponentWrapper>
  );
}

export default App;
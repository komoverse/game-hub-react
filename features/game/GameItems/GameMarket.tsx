import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';

import { getCollectionItems, getMarketCollections } from '@/services/games';
import useDebounce from '@/hooks/useDebounce';
import Iconify from '@/components/Iconify';
import { getHistoryTransaction, getMarketItemById } from '@/services/homepage';
import { ErrorResponseDto, QueryKey } from '@/types/general';
import actionNft from '@/store/detailNft/action';
import { ModalNftDetails } from '@/components/index';

import GameItem from './GameItem';
import MarketSidebar from './SidebarFilter';
import GameSearchField from './GameSearchField';
import { mapFilters, mapMarketItems } from './helpers';
import { HistoryTransactionDto, HistoryTransactionListDto } from '@/types/home';
import actionTransaction from '@/store/historyTransaction/action';
import actionToast from '@/store/toast/action';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const GameMarket = () => {
  const router = useRouter();
  const { game: gameId } = router.query;
  const [currCollection, setCurrCollection] = useState<string>('');

  const { page } = useSelector((state: ReduxState) => state.pagination);

  const { data: collections } = useQuery({
    queryKey: [QueryKey.MARKET_COLLECTION, gameId],
    queryFn: () => getMarketCollections(gameId as string),
  });

  const {
    data: _marketItems,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [QueryKey.COLLECTION_ITEMS, currCollection],
    queryFn: () => getCollectionItems(currCollection),
  });

  const [openModalDetail, setOpenModalDetail] = useState<boolean>(false);
  const [listingId, setListingId] = useState<string>('');
  const { isFetching: isFetchItemDetail } = useQuery({
    queryKey: [QueryKey.GET_MARKET_ITEM_BY_ID, listingId],
    queryFn: () => getMarketItemById(listingId),
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !!listingId,
    onError: (error: ErrorResponseDto) => error,
    onSuccess: (data) => actionNft.setDetailNft(data),
  });

  useQuery({
    queryKey: [QueryKey.HISTORY_TRANSACTION, listingId, page],
    queryFn: () => getHistoryTransaction(listingId, page),
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !!listingId,
    onSuccess: (data: HistoryTransactionDto) => {
      actionTransaction.setHistoryTransaction({
        data: data?.data.map(
          (item: HistoryTransactionListDto, idx: number) => ({
            ...item,
            id: idx,
          })
        ),
        pagination: data.pagination,
      });
    },
  });

  const onClickMarketItem = (listing_id: string) => {
    setOpenModalDetail(true);
    setListingId(listing_id);
  };

  useEffect(() => {
    if (collections) {
      setCurrCollection(collections[0].collection_address);
    }
  }, [collections]);

  const filters = mapFilters(_marketItems);
  const selectedFilter = useSelector(
    (state: ReduxState) =>
      state.market?.value && Object.values(state.market?.value).flat()
  );

  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const debouncedSearchKeyword: string = useDebounce<string>(
    searchKeyword,
    500
  );

  const [sortKey, setSortKey] = useState<string>('DATE_ASC');
  const {
    semi_custodial_wallet_pubkey: semiCustodialPubkey,
    wallet_pubkey: walletPubkey,
  } = useSelector((state: ReduxState) => state.profile);

  const [isDisplayUserItems, setIsDisplayUserItems] = useState<boolean>(false);

  const onDisplayUserItems = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDisplayUserItems(event.target.checked);
  };

  const isLoginBanner = useMemo(
    () => !walletPubkey && !semiCustodialPubkey && isDisplayUserItems,
    [walletPubkey, semiCustodialPubkey, isDisplayUserItems]
  );

  if (isError || isLoading) {
    return null;
  }

  const marketItems = mapMarketItems(
    _marketItems,
    selectedFilter,
    debouncedSearchKeyword,
    sortKey,
    isDisplayUserItems,
    walletPubkey,
    semiCustodialPubkey
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        position: 'relative',
      }}
    >
      <MarketSidebar
        collections={collections}
        currCollection={currCollection}
        setCurrCollection={setCurrCollection}
        filters={filters}
      />
      <Box component="section" sx={{ flexGrow: 1, p: 3 }}>
        <GameSearchField
          sortKey={sortKey}
          setSortKey={setSortKey}
          setKeyword={setSearchKeyword}
        />
        <Box sx={{ py: 1, display: 'flex' }} gap={2}>
          <Button color="info" onCanPlay={() => refetch()}>
            <Iconify icon="mdi:sync" height={24} width={24} color="#29b6f6" />
          </Button>
          <FormControlLabel
            control={
              <Checkbox
                checked={isDisplayUserItems}
                onChange={onDisplayUserItems}
              />
            }
            label="Show only your items"
          />
        </Box>

        {/* display if user was not login */}
        {isLoginBanner && (
          <Box
            bgcolor="#202020"
            p={4}
            sx={{ borderRadius: '16px', textAlign: 'center' }}
          >
            <Typography>Connect a wallet to see your items.</Typography>
          </Box>
        )}

        {/* display if user was login but the market was empty */}
        {!isLoginBanner && !marketItems.length && (
          <Box
            bgcolor="#202020"
            p={4}
            sx={{ borderRadius: '16px', textAlign: 'center' }}
          >
            <Typography>
              We cannot find items that match your wallet address
            </Typography>
          </Box>
        )}

        {!isLoginBanner && (
          <Grid container spacing={2}>
            {marketItems.map((item, i) => (
              <Grid item xs={6} sm={4} lg={2} key={i}>
                <GameItem
                  itemId={item.list_state}
                  imageUrl={item.nft.cached_image_uri}
                  name={item.nft.name}
                  price={item.price}
                  createdDate={item.created_at}
                  currency={item.currency_symbol}
                  onClickMarketItem={onClickMarketItem}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {!isFetchItemDetail && (
        <ModalNftDetails open={openModalDetail} setOpen={setOpenModalDetail} />
      )}
    </Box>
  );
};

export default GameMarket;

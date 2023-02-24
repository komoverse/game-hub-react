import { useState } from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Autocomplete,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import { Iconify } from '@/components/index';
import { getSearcContent } from '@/services/search';
import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/router';
import { shortenArbitraryText } from '@/utils/shorten';
import { QueryKey } from '@/types/general';

interface SearchContent {
  id: string;
  title: string;
  description: string;
  img_url: string;
  category: string;
}

export default function SearchField() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword: string = useDebounce<string>(keyword, 500);

  const { data, isLoading } = useQuery<readonly SearchContent[] | undefined>({
    queryKey: [QueryKey.SEARCH_CONTENT, debouncedKeyword],
    queryFn: () => getSearcContent(debouncedKeyword),
  });

  const router = useRouter();
  const onClickOption = (category: string, path: string) => {
    if (category === 'game') {
      const nextRoute = `/${path}`;
      router.push(nextRoute, nextRoute);
      return;
    }
    const urlObject = {
      pathname: `/${category}/[id]`,
      query: { id: path },
    };

    router.push(urlObject);
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      size="small"
      sx={{
        width: { xs: '320px', md: '553px' },
        flexGrow: { xs: '1' },
        borderRadius: '1rem',
      }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      loading={isLoading}
      onInputChange={(_, newInputValue) => {
        setKeyword(newInputValue);
      }}
      groupBy={(option) => option.category}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title || ''}
      options={data || []}
      renderOption={(_, option) => {
        if (!option.id) return;
        return (
          <ListItemButton
            onClick={() => onClickOption(option.category, option.id)}
            sx={{ p: '8px 16px 8px 24px' }}
          >
            {option.img_url && (
              <ListItemAvatar sx={{ minWidth: '40px' }}>
                <Avatar
                  variant="rounded"
                  alt={`image of ${option.title}`}
                  src={option.img_url}
                  sx={{ width: 24, height: 24 }}
                />
              </ListItemAvatar>
            )}
            <ListItemText
              primary={option.title}
              secondary={
                option.description
                  ? shortenArbitraryText(option.description, 70)
                  : ''
              }
              primaryTypographyProps={{
                fontWeight: 'semibold',
                fontSize: 'medium',
              }}
              secondaryTypographyProps={{
                fontSize: 'small',
              }}
            />
          </ListItemButton>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '2rem',

              legend: {
                marginLeft: '30px',
              },
            },
            '& .MuiAutocomplete-inputRoot': {
              paddingLeft: '20px !important',
              borderRadius: '2rem',
            },
          }}
          placeholder={t('navbar.search') || ''}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <Iconify icon="ic:outline-search" height={24} width={24} />
            ),
          }}
        />
      )}
    />
  );
}

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface SearchbarProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function Searchbar({ value, onChange }: SearchbarProps) {
  const { t } = useTranslation();

  return (
    <TextField
      variant='outlined'
      placeholder={t('search')}
      value={value}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        '&': {
          maxWidth: '20rem',
          width: '100%',
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: '3rem',
        },
        '& .MuiOutlinedInput-input': {
          padding: '0.53125rem 0.875rem 0.53125rem 0rem',
        },
      }}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}

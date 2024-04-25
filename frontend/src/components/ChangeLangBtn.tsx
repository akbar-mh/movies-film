import { Box, FormControl, InputLabel, MenuItem, Select, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next';
import theme from '../routes/theme';

const ChangeLangBtn = () => {
    const { t, i18n } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: isMobile ? "-8rem" : "-40px",   p: 2, width: "100%", height: "10%" }}>
            <FormControl sx={{ width: '10%' }}>
                <InputLabel id="language-select-label" sx={{ color: "#00AFBB" }}>{t('language')}</InputLabel>
                <Select
                    sx={{ color: "#00AFBB" }}
                    labelId="language-select-label"
                    id="language-select"
                    value={i18n.language}
                    label="Language"
                    onChange={(event) => i18n.changeLanguage(event.target.value)}
                   > 
                    <MenuItem
                     value="en"
                    >English</MenuItem>
                    <MenuItem value="fa" sx={{ fontFamily: "Markazi Text" }}>فارسی</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default ChangeLangBtn
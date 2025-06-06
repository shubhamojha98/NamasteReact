
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemList from './ItemList';

const ResturantCategory = ({ data, expanded, onChange }) => {
  return (
    <Box sx={{ width: '50%', margin: '1rem auto' }}>
      <Accordion expanded={expanded} onChange={onChange} elevation={3}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 600 }}>
            {data.title} ({data.itemCards.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ItemList items={data.itemCards} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ResturantCategory;

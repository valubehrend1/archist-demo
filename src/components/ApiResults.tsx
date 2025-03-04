import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

import ChunksPagination from './ChunksPagination';

interface ApiResultsProps {
  data?: Record<string, unknown>;
}

const TagsContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  mt: 2
}));

const Tag = styled(Box)(() => ({
  padding: '10px 15px',
  margin: '20px',
  backgroundColor: '#382B5F',
  borderRadius: '40px'
}));

const TypographyContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '50px',
  marginBottom: '20px',
  gap: 1
}));

const ApiResults: React.FC<ApiResultsProps> = ({ data }) => {
  const aggregatedConcepts = data?.aggregated_concepts as Array<{ concept: string }>;
  const dataChunks = data?.chunks_concepts as Array<{ text_chunk: string, similar_concepts: Array<{ concept: string }> }>;

  return (
    <Box sx={{ mt: 10 }}>
      <hr style={{ marginBottom: '50px' }} />
      <Typography variant="h5" color="white" fontWeight={600} sx={{ mb: 2 }}>
        Summary
      </Typography>
      <Typography variant='body1' color="white">{data?.summary?.toString() || ''}</Typography>


      <TypographyContainer>
        <Typography variant="h5" color="white" fontWeight={600}>
          File Tags
        </Typography>
        <Typography variant='body1' color="white">Here are the tags extractes from the uploaded file.</Typography>
      </TypographyContainer>

      <TagsContainer>
        {aggregatedConcepts?.map((item, index) => (
          <Tag key={index}>
            <Typography variant="body1" color="white" fontWeight={300}>
              {item.concept}
            </Typography>
          </Tag>
        ))}
      </TagsContainer>

      <TypographyContainer>
        <Typography variant="h5" color="white" fontWeight={600}>
          File Content
        </Typography>
        <Typography variant='body1' color="white">Here are the content extracts from the uploaded file.</Typography>
      </TypographyContainer>

      {dataChunks && (
        <ChunksPagination chunks={dataChunks} />
      )}

    </Box>
  );
}; export default ApiResults;

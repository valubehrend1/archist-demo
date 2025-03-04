import React, { useState } from "react";
import { Box, Typography, Pagination } from "@mui/material";
import { styled } from "@mui/system";

const Tag = styled(Box)(() => ({
  padding: '10px 15px',
  backgroundColor: '#382B5F',
  borderRadius: '40px',
  color: "white",
}));


const ChunksPagination: React.FC<{ chunks: Array<{ text_chunk: string, similar_concepts: Array<{ concept: string }> }> }> = ({ chunks }) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (!chunks || chunks.length === 0) {
    return <Typography>No hay chunks disponibles.</Typography>;
  }

  const currentChunk = chunks[currentPage];

  return (
    <Box sx={{ mt: 2 }}>
      {/* Box que muestra el texto del chunk */}
      <Box
        sx={{
          p: 4,
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <Typography variant="body1">{currentChunk.text_chunk}</Typography>
        {/* Box para los tags */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 3, mb: 3 }}>
          {currentChunk.similar_concepts.map((item, index) => (
            <Tag key={index}>
              <Typography>
                {item.concept}
              </Typography>
            </Tag>
          ))}
        </Box>

        {/* Controles de paginación */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination
            count={chunks.length}
            page={currentPage + 1}
            onChange={(_event, page) => setCurrentPage(page - 1)}
            size="large"
          />
        </Box>
      </Box>


    </Box>
  );
};

export default ChunksPagination;

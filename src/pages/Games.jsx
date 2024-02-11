import React from "react";
import GameCarousel from "../components/GameCarousel";
import { Box, Container, Stack, Typography } from "@mui/material";
import chess from "../assets/chess.webp";
import illuminate from "../assets/lluminate.webp";
import factory from "../assets/factory.webp";
import fruits from "../assets/fruits.webp";
import flower from "../assets/flower.webp";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div>
      <GameCarousel />
      <Container fixed>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          style={{ marginBlock: "80px" }}
        >
          <Link to="/games/chess">
            <Box
              sx={{
                padding: "20px",
                border: "1px solid #d0d0d0",
                borderRadius: "15px",
              }}
            >
              <img
                src={chess}
                alt=""
                style={{
                  width: 170,
                  height: 170,
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h5" fontSize={20}>
                Chess
              </Typography>
            </Box>
          </Link>
          <Link to="/games/illuminate">
            <Box
              sx={{
                padding: "20px",
                border: "1px solid #d0d0d0",
                borderRadius: "15px",
              }}
            >
              <img
                src={illuminate}
                alt=""
                style={{
                  width: 170,
                  height: 170,
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h5" fontSize={20}>
                Illuminate
              </Typography>
            </Box>
          </Link>
          <Link to="/games/chocolate-factory">
            <Box
              sx={{
                padding: "20px",
                border: "1px solid #d0d0d0",
                borderRadius: "15px",
              }}
            >
              <img
                src={factory}
                alt=""
                style={{
                  width: 170,
                  height: 170,
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h5" fontSize={20}>
                Chocolate Factory
              </Typography>
            </Box>
          </Link>
          <Link to="/games/fruit-cubes">
            <Box
              sx={{
                padding: "20px",
                border: "1px solid #d0d0d0",
                borderRadius: "15px",
              }}
            >
              <img
                src={fruits}
                alt=""
                style={{
                  width: 170,
                  height: 170,
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h5" fontSize={20}>
                Fruit Cube
              </Typography>
            </Box>
          </Link>
          <Link to="/games/flower-burst">
            <Box
              sx={{
                padding: "20px",
                border: "1px solid #d0d0d0",
                borderRadius: "15px",
              }}
            >
              <img
                src={flower}
                alt=""
                style={{
                  width: 170,
                  height: 170,
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h5" fontSize={20}>
                Flower burst
              </Typography>
            </Box>
          </Link>
        </Stack>
      </Container>
    </div>
  );
};

export default Games;

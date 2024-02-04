import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import "./homepage.css";
import underline from "../../assets/underline.svg";
import underline2 from "../../assets/underline2.svg";
import spiral from "../../assets/spiral-muted.svg";
import arrow from "../../assets/arrow-muted.svg";
import blunt from "../../assets/blunt-circle.svg";
import { useNavigate } from "react-router-dom";
import HomeOffers from "../../components/homeoffers";
import Homefeatures from "../../components/homefeatures/homefeatures";
import Homefaq from "../../components/homefaq/homefaq";
import Chatbot from "../../components/chatbot/chatbot";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <Box>
      <Container fixed>
        <Stack
          direction="column"
          alignItems="center"
          sx={{ padding: "140px 0", position: "relative" }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              color: "#333",
              fontFamily: `'Protest Riot', sans-serif`,
              marginBottom: "30px",
            }}
          >
            Nurturing{" "}
            <Typography
              variant="h1"
              sx={{
                color: "#663dd4",
                fontFamily: "inherit",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              Bonds,
              <img
                src={underline2}
                alt=""
                style={{
                  width: "220px",
                  marginTop: "-15px",
                  marginLeft: "-25px",
                }}
              />
            </Typography>
            <br />
            illuminating
            <Typography
              variant="h1"
              sx={{
                color: "#f6d26f",
                fontFamily: "inherit",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              Insights
              <img
                src={underline}
                alt=""
                style={{
                  width: "320px",
                  marginTop: "-15px",
                  marginLeft: "15px",
                }}
              />
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "400px",
              textAlign: "center",
              fontSize: "14px",
              color: "#666",
            }}
          >
            FilialMinds envisions a future where innovative technology
            transforms child mental health assessments and early development,
            fostering a world where every child thrives.
          </Typography>
          <Button
            variant="contained"
            sx={{
              padding: "7px",
              paddingLeft: "11px",
              borderRadius: "20px",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#664dd4",
              fontSize: "12px !important",
              marginTop: "20px",
              boxShadow: "#664dd433 0px 8px 24px",
              border: "1px solid transparent",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#664dd4",
                borderColor: "#664dd4",
                boxShadow: "#664dd433 0px 8px 24px",
                "> div": {
                  backgroundColor: "#663dd4",
                  "> i": {
                    color: "#fff !important",
                    transform: "rotateZ(-405deg) !important",
                  },
                },
              },
              transition: "all .3s ease",
            }}
            size="small"
            onClick={() => navigate("/register")}
          >
            Get Started{" "}
            <Box
              sx={{
                padding: "0px 6px",
                background: "#fff",
                borderRadius: "50%",
                fontSize: "14px",
                marginLeft: "10px",
                transition: "background-color .3s ease",
              }}
            >
              <i
                className="fa-solid fa-arrow-right"
                style={{
                  color: "#333",
                  transform: "rotateZ(-45deg)",
                  transition: "all .3s ease",
                }}
              ></i>
            </Box>
          </Button>
          <img
            src={spiral}
            alt=""
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              right: "10%",
              top: "68%",
            }}
          />
          <img
            src={arrow}
            alt=""
            style={{
              position: "absolute",
              width: "120px",
              height: "120px",
              left: "15%",
              top: "55%",
              transform: "rotateX(180deg) rotateZ(-70deg)",
            }}
          />
          <img
            src={blunt}
            alt=""
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              right: "7%",
              top: "20%",
              transform: "rotateX(180deg) rotateZ(-70deg)",
            }}
          />
        </Stack>
      </Container>
      <HomeOffers />
      <Homefeatures />
      <Homefaq />
      <Chatbot />
    </Box>
  );
}

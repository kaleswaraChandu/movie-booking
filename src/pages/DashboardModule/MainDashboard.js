import React from "react";
import Cards from "../../sections/Dashboard/Cards";
import TrendingCard from "../../sections/Dashboard/TrendingCard";
import { Grid } from "@mui/material";
export default function MainDashboard() {
  const dict = [
    {
      name: "Tollywood",
      images: [
        {
          img: "https://cdn.marvel.com/content/1x/extremevv1_preview_card.jpg",
        },
        {
          img: "https://cdn.marvel.com/content/1x/astonishing_iceman_card.jpg",
        },
        {
          img: "https://cdn.marvel.com/content/1x/dark_x-men_card.jpg",
        },
        {
          img: "https://cdn.marvel.com/content/1x/x-men_unlimited_12_art_by_ariel_olivetti_card.jpg",
        },
        {
          img: "https://cdn.marvel.com/content/1x/bacchae_hippolyta_card.jpg",
        },

        {
          img: "https://cdn.marvel.com/content/1x/astonishing_iceman_card.jpg",
        },
        {
          img: "https://cdn.marvel.com/content/1x/astonishing_iceman_card.jpg",
        },
        {
          img: "https://cdn.marvel.com/content/1x/astonishing_iceman_card.jpg",
        },
      ],
    },
    {
      name: "Hollywood",
      images: [
        {
          img: "https://cdn.marvel.com/content/1x/extremevv1_preview_card.jpg",
        },
        {
          img: "https://cdn.marvel.com/content/1x/astonishing_iceman_card.jpg",
        },
        {
          img: "https://cdn.marvel.com/content/1x/dark_x-men_card.jpg",
        },
        {
          img: "https://cdn.marvel.com/content/1x/x-men_unlimited_12_art_by_ariel_olivetti_card.jpg",
        },
        {
          img: "https://cdn.marvel.com/content/1x/bacchae_hippolyta_card.jpg",
        },
      ],
    },
  ];
  return (
    <>
      <Grid container rowSpacing={2} sx={{padding:'7vh', bgcolor:'black'}}>
        <Grid xs={12} sx={{margin:'auto 35vh'}}>
          <TrendingCard data={dict} />
        </Grid>
        <Grid xs={12}>
          <Cards data={dict} />
        </Grid>
      </Grid>
    </>
  );
}

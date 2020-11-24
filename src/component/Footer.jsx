import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: "50px 0",
    flexShrink: 0,
  },
  text: {
    color: "white",
  },
  footerLinks: {
    [theme.breakpoints.up("sm")]: {
      width: 180,
      margin: "0 auto",
    },
  },
  footerLogo: {
    borderTop: "1px solid rgba(255,255,255,0.4)",
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  logo: {
    width: "100%",
    objectFit: "contain",
  },
}));

const footerLinks = [
  {
    title: "Get To Know Us",
    links: [
      "About Us",
      "Careers",
      "Press Releases",
      "Amazon Cares",
      "Gift A Smile",
    ],
  },
  {
    title: "Connect With Us",
    links: ["Facebook", "Twitter", "Instagram"],
  },
  {
    title: "Make Money With Us",
    links: [
      "Sell on Amazon",
      "Sell under Amazon Accelerator",
      "Become an Affiliate",
      "Fulfilment by Amazon",
      "Advertise Your Products",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Your Account",
      "Return Center",
      "100% Purchase Protection",
      "Amazon App Download",
      "Amazon Assitant Download",
      "Help",
    ],
  },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container maxWidth="lg" className={classes.box}>
        <Grid container>
          {footerLinks.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={item.title}
              style={{ marginBottom: 10 }}
            >
              <Box className={classes.footerLinks}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.text}
                >
                  {item.title}
                </Typography>
                <Box display="flex" flexDirection="column">
                  {item.links.map((link, index) => (
                    <Typography
                      key={index}
                      gutterBottom
                      variant="caption"
                      className={classes.text}
                    >
                      <Link href="#" style={{ color: "inherit" }}>
                        {link}
                      </Link>
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          display="flex"
          justifyContent="center"
          className={classes.footerLogo}
        >
          <RouterLink to="/" style={{ width: 100 }}>
            <img
              className={classes.logo}
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </RouterLink>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;

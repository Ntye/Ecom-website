// import React from 'react'
import p404 from "../assets/illustration_404.svg"
import {Container, Card, Button} from "react-bootstrap";

const NotFound = () => {
  return (
    <div>
      <img src={p404}/>
            Sorry, page not found!

            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
            sure to check your spelling.

          {/*<Card*/}
          {/*  component="img"*/}
          {/*  src="/assets/illustrations/illustration_404.svg"*/}
          {/*  sx={{*/}
          {/*    mx: 'auto',*/}
          {/*    height: 260,*/}
          {/*    my: { xs: 5, sm: 10 },*/}
          {/*  }}*/}
          {/*/>*/}

          <Button href="/" size="large" variant="contained" >
            Go to Home
          </Button>
    </div>
  )
}

export default NotFound

//import imgg from '../../storage/hellothisisimage.png'
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const handleClick = (link) => {
    // Handle the click event, e.g., navigate to the specified link
    window.open(link, '_blank');
  };
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div>
          {dataportfolio.map((data, i) => {
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  marginBottom:"3.5rem"
                }}
              >
                <h3 style={{ marginBottom: '3.5rem' }}>{data.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                             <div style={{ display: 'flex'}}>
                  <img
                    src={data.img}
                    alt=""
                    style={{ width: '40%',  marginBottom: '0.5rem' }}
                  />
                  <div style={{ textAlign: 'justify', width: '60%', marginLeft: '5rem' }}>
                    <p>{data.description}</p>
                  </div></div>
                  <div style={{width: '100%', margin:'20px'}}>
                    <button style={{backgroundColor: 'transparent', color: 'white', border: '1px solid', borderRadius: '20px', padding: '10px 20px', }} onClick={() => handleClick(data.link)}>For Demonstration, Please Click Here.</button>
                  </div>
                </div>

              </div>

            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};

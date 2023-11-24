import React, { useState } from 'react';
import '../style/views/Portfolio.scoped.scss';
import MainNavbar from '../components/MainNavbar';
import JinJooContent from '../components/JinJooContent';
import LokmanContent from '../components/LokmanContent';
import AmadeusContent from '../components/AmadeusContent';
import AttoChannelContent from '../components/AttoChannelContent';
import jinJooImg from '../assets/port-jinjoo.jpg';
import lokmanImg from '../assets/port-lokman.jpg';
import amadeusImg from '../assets/port-amadeus.jpg';
import attochannelNavimg from '../assets/nav-port-attochannel.jpg';
import jinJooNavImg from '../assets/nav-port-jinjoo.jpg';
import lokmanNavImg from '../assets/nav-port-lokman.jpg';
import amadeusNavImg from '../assets/nav-port-amadeus.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('jinjoo');

  const getActiveImage = () => {
    switch (activeTab) {
      case 'jinjoo':
        return jinJooImg;
      case 'lokman':
        return lokmanImg;
      case 'amadeus':
        return amadeusImg;
      case 'attochannel':
        return attochannelNavimg;
      default:
        return jinJooImg;
    }
  };

  const items = [
    { id: 'jinjoo', alt: 'Jin Joo' },
    { id: 'lokman', alt: 'Lokman' },
    { id: 'amadeus', alt: 'Amadeus' },
    { id: 'attochannel', alt: '@channel' },
  ];

  const handleItemClick = (itemId) => {
    setActiveTab(itemId);
  };

  const CustomCarouselItem = ({ item }) => (
    <Col>
      <Card
        style={{ cursor: 'pointer' }}
        onClick={() => handleItemClick(item.id)}
      >
        <Card.Img
          src={
            item.id === 'jinjoo'
              ? jinJooNavImg
              : item.id === 'lokman'
              ? lokmanNavImg
              : item.id === 'amadeus'
              ? amadeusNavImg
              : attochannelNavimg
          }
          alt={item.alt}
        />
      </Card>
    </Col>
  );

  return (
    <div className='portfolioContainer'>
      <MainNavbar />
      <h1 className="portfolioTitle">PORTFOLIO</h1>
      <div className="portfolioWrapper">
        <div className="portfolioNav">
          <Container>
            <Row>
              <Col>
              <Carousel
                interval={5000}
                activeIndex={items.findIndex((item) => item.id === activeTab)}
                onSelect={(index) => setActiveTab(items[index].id)}
              >
                {items.map((item) => (
                  <Carousel.Item key={item.id}>
                    <Row>
                      <CustomCarouselItem item={item} />
                      <CustomCarouselItem
                        item={items[(items.findIndex((i) => i.id === item.id) + 1) % items.length]}
                      />
                      <CustomCarouselItem
                        item={items[(items.findIndex((i) => i.id === item.id) + 2) % items.length]}
                      />
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>

              </Col>
            </Row>
          </Container>
        </div>

        <div className="portfolioContentArea">
          <div className="portfolioImage">
            <img src={getActiveImage()} alt="Tab Content" />
          </div>
          <div className="portfolioContent">
            {activeTab === 'jinjoo' && <JinJooContent />}
            {activeTab === 'lokman' && <LokmanContent />}
            {activeTab === 'amadeus' && <AmadeusContent />}
            {activeTab === 'attochannel' && <AttoChannelContent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

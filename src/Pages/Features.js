import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
function Features () {
    return (
        <>
              <section className="features-section">
                <Container>
                  <Row className="text-center">

                    <Col md={4} className="mb-4 mb-md-0">
                      <div className="feature-card">
                        <div className="feature-icon feature-icon-green">
                          <i className="bi bi-truck"></i>
                        </div>
                        <div className="feature-description">
                          <h6 className="feature-title">Fast Delivery</h6>
                          <p className="feature-text">Free shipping over $50</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                      <div className="feature-card">
                        <div className="feature-icon feature-icon-terracotta">
                          <i className="bi bi-shield-check"></i>
                        </div>
                        <div className="feature-description">
                        <h6 className="feature-title">Secure Payment</h6>
                        <p className="feature-text">100% secure transactions</p>                            
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="feature-card">
                        <div className="feature-icon feature-icon-sage">
                          <i className="bi bi-tag"></i>
                        </div>
                        <div className="feature-description">
                        <h6 className="feature-title">Best Prices</h6>
                        <p className="feature-text">Guaranteed low prices</p>                            
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
        </>
    ) 
}
export default Features;
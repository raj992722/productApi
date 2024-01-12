const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); 

chai.use(chaiHttp);
const expect = chai.expect;

describe('Product API', () => {
  describe('POST /api/products', () => {
    it('should create a new product', async () => {
      const res = await chai
        .request(app)
        .post('/api/products')
        .send({
          name: 'Test Product',
          description: 'Testing the product creation',
          price: 29.99,
          variants: [{
            name: 'Variant 1',
            sku: 'SKU123',
            additional_cost: 5.99,
            stock_count: 50
          }]
        });

      expect(res).to.have.status(201);
      expect(res.body).to.be.an('object');
      expect(res.body.name).to.equal('Test Product');
    });
  });

  describe('GET /api/products/search', () => {
    it('should search for products', async () => {
      const res = await chai
        .request(app)
        .get('/api/products/search')
        .query({ query: 'Test' });

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      expect(res.body.length).to.be.greaterThan(0);
    });

    it('should handle missing query parameter', async () => {
      const res = await chai
        .request(app)
        .get('/api/products/search');

      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
    });
  });
});

import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import HttpStatus from 'http-status-codes';

import app from '../../src/index';

describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => { });
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('to-do list', () => {
    it('given to-do list should return 200', (done) => {
      const inputBody = {
        "Title": "Hello",
        "Description": "Heyman",
        "Status": "Doing"
      }
      request(app)
        .post('/api/v1/to-do')
        .send(inputBody)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
          done();
        });
    });
  })

  describe('/to-do list', () => {
    it('given operation should retrieve all the lists of the user ', (done) => {
      request(app)
        .get('/api/v1/to-do')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.OK);
          done();
        });
    });
  })
});

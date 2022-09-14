import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import HttpStatus from 'http-status-codes';

let listid;

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

  //>>>>>>>>>>>>>CREATING NEW LIST
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

  //>>>>>>>>>>GET ALL THE LISTS
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

  //>>>>>>>>>GET A SINGLE LIST

  describe('/to-do/_id', () => {
    it('get single list by list id should return status 200 ', (done) => {

      request(app)
        .get(`/api/v1/note/${listid}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.OK);
          done();
        });

    });
  })
  //>>>>>>>>>>>UPDATING THE LIST
  describe('/to-do/_id', () => {
    it('given operation should update the given list of the particular id', (done) => {
      const inputBody = {
        "Title": "Heyy",
        "Description": "Hello"
      };
      request(app)
        .put(`/api/v1/to-do/${listid}`)
        .send(inputBody)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.OK);
          done();
        });
    });
  })

  //>>>>>>>>>DELETE THE LIST
  describe('/notes/_id', () => {
    it('given operation should delete the list of the particular id ', (done) => {
      request(app)
        .delete('/api/v1/to-do/:id')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.ACCEPTED);
          done();
        });
    });
  })
});



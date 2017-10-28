import * as jwt from "jwt-simple";
import * as HTTPStatus from 'http-status';
import { app, request, expect } from './config/helpers';

describe('Testes de integração', () => {

  'use strict';
  const config = require('../../server/config/env/config')();
  const model = require('../../server/models');

  let id;
  let token;

  const userTest = {
    id: 100,
    name: 'Usuário Teste',
    email: 'teste@email.com',
    password: 'teste'
  }

  const userDefault = {
    id: 1,
    name: 'Default User',
    email: 'default@email.com',
    password: 'default'
  }

  beforeEach((done) => {
    model.User.destroy({
      where: {}
    })
    .then(() => {
      return model.User.create(userDefault);
    })
    .then(user => {
      model.User.create(userTest)
        .then(() => {
          token = jwt.encode({id: user.id}, config.secret)
          done();
        })
    })
  });

  describe('POST /token', () => {
    it('Deve receber um JWT', done => {
      const credentials = {
        email: userDefault.email,
        password: userDefault.password
      };
      request(app)
        .post('/token')
        .send(credentials)
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.OK);
          expect(res.body.token).to.equal(`${token}`);
          done(error);
        });
    });

    it('Não deve gerar Token', done => {
      const credentials = {
        email: 'invalido@email.com',
        password: 'invalido'
      };
      request(app)
        .post('/token')
        .send(credentials)
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.UNAUTHORIZED);
          expect(res.body).to.empty;
          done(error);
        })

    })

  })

  describe('GET /api/users/all', () => {
    it('Deve retornar um Array com todos os usuários', done => {
      request(app)
        .get('/api/users/all')
        .set('Content-Type', 'application/json')
        .set('Autorization', `JWT ${token}`)
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.OK);
          expect(res.body.payload).to.be.an('array');
          expect(res.body.payload[0].name).to.be.equal(userDefault.name);
          expect(res.body.payload[0].email).to.be.equal(userDefault.email);
          done(error);
        })
    });
  });

  // describe('GET /api/users/:id', () => {
  //   it('Deve retornar um Array com apenas um usuário', done => {
  //     request(app)
  //       .get(`/api/users/${userDefault.id}`)
  //       .set('Content-Type', 'application/json')
  //       .set('Autorization', `JWT ${token}`)
  //       .end((error, res) => {
  //         expect(res.status).to.equal(HTTPStatus.OK);
  //         expect(res.body.payload.id).to.be.equal(userDefault.id);
  //         expect(res.body.payload).to.have.all.keys([
  //           'id', 'name', 'email', 'password'
  //         ]);
  //         id = res.body.payload.id;
  //         done(error);
  //       })
  //   });
  // });
  //
  // describe('POST /api/users/create', () => {
  //   it('Deve criar um usuário', done => {
  //     const user = {
  //       id: 2,
  //       name: 'Usuario Teste',
  //       email: 'usuario@email.com',
  //       password: 'novouser'
  //     }
  //     request(app)
  //       .post(`/api/users/create`)
  //       .set('Content-Type', 'application/json')
  //       .set('Autorization', `JWT ${token}`)
  //       .send(user)
  //       .end((error, res) => {
  //         expect(res.status).to.equal(HTTPStatus.OK);
  //         expect(res.body.payload.id).to.be.eql(user.id);
  //         expect(res.body.payload.name).to.be.eql(user.name);
  //         expect(res.body.payload.email).to.be.eql(user.email);
  //         done(error);
  //       })
  //   });
  // });
  //
  // describe('PUT /api/users/:id/update', () => {
  //   it('Deve atualizar um usuário', done => {
  //     const user = {
  //       name: 'TestUpdate',
  //       email: 'update@email.com'
  //     }
  //     request(app)
  //       .put(`/api/users/${userTest.id}/update`)
  //       .set('Content-Type', 'application/json')
  //       .set('Autorization', `JWT ${token}`)
  //       .send(user)
  //       .end((error, res) => {
  //         expect(res.status).to.equal(HTTPStatus.OK);
  //         expect(res.body.payload[0]).to.be.eql(1);
  //         done(error);
  //       })
  //   });
  // });
  //
  // describe('DELETE /api/users/:id/destroy', () => {
  //   it('Deve deletar um usuário', done => {
  //     request(app)
  //       .delete(`/api/users/${1}/destroy`)
  //       .set('Content-Type', 'application/json')
  //       .set('Autorization', `JWT ${token}`)
  //       .end((error, res) => {
  //         expect(res.status).to.equal(HTTPStatus.OK);
  //         expect(res.body.payload).to.eql(1);
  //         done(error);
  //       })
  //   });
  // });

});

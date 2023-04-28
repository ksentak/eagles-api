import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // GET all players
  it('/players (GET) should return an array of players', async () => {
    return request(app.getHttpServer())
      .get('/players')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
      });
  });

  // GET random player
  it('/players/random (GET) should return a random player', async () => {
    return request(app.getHttpServer())
      .get('/players/random')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('number');
        expect(res.body).toHaveProperty('first_name');
        expect(res.body).toHaveProperty('last_name');
        expect(res.body).toHaveProperty('position');
        expect(res.body).toHaveProperty('height');
        expect(res.body).toHaveProperty('weight');
        expect(res.body).toHaveProperty('age');
        expect(res.body).toHaveProperty('years_pro');
        expect(res.body).toHaveProperty('college');
      });
  });

  // GET specific player
  it('/players/:jerseyNumber (GET) should return a specific player', async () => {
    return request(app.getHttpServer())
      .get('/players/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('number', '1');
        expect(res.body).toHaveProperty('first_name');
        expect(res.body).toHaveProperty('last_name');
        expect(res.body).toHaveProperty('position');
        expect(res.body).toHaveProperty('height');
        expect(res.body).toHaveProperty('weight');
        expect(res.body).toHaveProperty('age');
        expect(res.body).toHaveProperty('years_pro');
        expect(res.body).toHaveProperty('college');
      });
  });

  // GET position group
  it('/players/position/:position (GET) should return an array of players', async () => {
    return request(app.getHttpServer())
      .get('/players/position/qb')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('number');
        expect(res.body[0]).toHaveProperty('first_name');
        expect(res.body[0]).toHaveProperty('last_name');
        expect(res.body[0]).toHaveProperty('position');
        expect(res.body[0]).toHaveProperty('height');
        expect(res.body[0]).toHaveProperty('weight');
        expect(res.body[0]).toHaveProperty('age');
        expect(res.body[0]).toHaveProperty('years_pro');
        expect(res.body[0]).toHaveProperty('college');
      });
  });
});

const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../app');

beforeAll(async () => {
    await sequelize.sync();
});

describe('POST /join', () => {
    test('로그인 안했으면 가입', (done) => {
        request(app)
        .post('/auth/join')
        .send({
            email: 'vini@naver.com',
            nick: 'testvini',
            password: '1234'
        })
        .expect('Location', '/')
        .expect(302, done);
    });
});

describe('POST /join', () => { //로그인한채로 접근하는걸 상정
    const agent = request.agent(app); // ---- agent (하나 이상의 요청에서 재사용 가능??..)
    beforeEach((done) => {
        agent
        .post('/auth/login')
        .send({
            email: 'vini@naver.com',
            password: '1234'
        })
        .end(done);
    });
    test('이미 로그인 했으면 redirect /', (done) => {
        const message = encodeURIComponent('로그인한 상태입니다.');
        //exist 같긴 함.. 오락가락하네
        agent
        .post('/auth/join')
        .send({
            email: 'vini@naver.com',
            nick: 'vinitest',
            passowrd: '1234'
        })
        .expect('Location', `/?error=${message}`)
        .expect(302, done);
    });
});





import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'

describe('AppController (e2e)', () => {
    let app: INestApplication

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile()

        app = moduleFixture.createNestApplication()
        await app.init()
    })

    it('/user/join (POST)', () => {
        return request(app.getHttpServer())
            .post('/user/join')
            .send({
                username: 'testuser',
                password: 'testpassword',
                email: 'test@test.com',
            })
            .expect(201)
    })
})

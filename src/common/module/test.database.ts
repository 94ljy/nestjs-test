import { TypeOrmModule } from '@nestjs/typeorm'

export const testDatabaseModule = TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    synchronize: true,
})

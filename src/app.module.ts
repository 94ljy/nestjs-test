import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db.sqlite',
            synchronize: true,
            logging: true,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
        }),
        UserModule,
    ],
})
export class AppModule {}

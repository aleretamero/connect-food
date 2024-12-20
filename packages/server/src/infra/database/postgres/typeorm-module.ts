import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dataSourceOptions } from '@/infra/database/postgres/typeorm-datasource';
import { TypeormService } from '@/infra/database/postgres/typeorm.service';
import { TypeormInterceptor } from '@/infra/database/postgres/typeorm.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeormMiddleware } from '@/infra/database/postgres/typeorm.middleware';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions as TypeOrmModuleOptions)],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TypeormInterceptor,
    },
    TypeormService,
  ],
  exports: [TypeormService],
})
export class TypeormModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TypeormMiddleware).forRoutes('*');
  }
}

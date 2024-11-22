import { Type } from '@nestjs/common';
import { TypeormModule } from '@/infra/database/postgres/typeorm-module';
import { MailModule } from '@/infra/mail/mail.module';
import { MongoModule } from '@/infra/database/mongo/mongo-module';
import { HashModule } from '@/infra/hash/hash.module';
import { QueueModule } from '@/infra/queue/queue.module';
import { JwtModule } from '@/infra/jwt/jwt.module';
import { I18nModule } from '@/infra/i18n/i18n.module';
import { RateLimitingModule } from '@/infra/rate-limiting/rate-limiting.module';
import { LogErrorModule } from '@/infra/logging/log-error/log-error.module';

export default [
  TypeormModule,
  MongoModule,
  MailModule,
  QueueModule,
  LogErrorModule,
  JwtModule,
  HashModule,
  I18nModule,
  RateLimitingModule,
] as Type[];

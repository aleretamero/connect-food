import { Module } from '@nestjs/common';

import ModulesModules from '@/modules';
import InfraModules from '@/infra';

@Module({
  imports: [...InfraModules, ...ModulesModules],
})
export class AppModule {}

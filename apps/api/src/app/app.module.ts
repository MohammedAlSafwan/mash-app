import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { ServeStaticModule } from "@nestjs/serve-static"
import { Connection } from "typeorm"

import { configuration } from "../config/configuration"
import { HealthModule } from "../endpoints/health/health.module"
import { ItemsModule } from "../endpoints/items/items.module"
import { LoggerMiddleware } from "../utils/middleware/LoggerMiddleware"
import { getRootModuleImports } from "../utils/utils"

@Module({
  imports: [
    ...getRootModuleImports(configuration),
    ServeStaticModule.forRoot({
      rootPath: `${__dirname}/assets`,
      exclude: ["/api*"],
    }),
    HealthModule,
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*")
  }
  constructor(private readonly connection: Connection) {}
}

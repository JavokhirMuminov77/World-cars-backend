import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver} from "@nestjs/apollo";
import { AppResolver } from './app.resolve';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';
import { T } from './libs/types/common';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      uploads: false,
      autoSchemaFile: true,
      formatError: (error: T) => {
        console.log("error:", error);
        const graphqlFormattedError = {
          code: error?.extensions.code,
          message:
           error?.extensions?.extension?.response?.message || error?.extensions?.response.message || error?.message,
        };
        console.log("GRAPHQUEL GLOBAL ERROR", graphqlFormattedError);
        return graphqlFormattedError;

      }
  }), ComponentsModule, DatabaseModule,],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}

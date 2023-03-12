import {Module} from "@nestjs/common"
import {AppController} from "./app.controller"
import {AppService} from "./app.service"
import {CatsController} from "./cat.controller"
import {CatsService} from "./cat.service"
import {PostService} from "./post.service"
import {PrismaService} from "./prisma.service"
import {UserService} from "./user.service"
import {UsersModule} from "./users/users.module"

@Module({
  imports: [UsersModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService, PostService, UserService, PrismaService]
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }

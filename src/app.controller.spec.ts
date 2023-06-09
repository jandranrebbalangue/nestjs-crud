import {Test, TestingModule} from "@nestjs/testing"
import {AppController} from "./app.controller"
import {AppService} from "./app.service"
import {PostService} from "./post.service"
import {PrismaService} from "./prisma.service"
import {UserService} from "./user.service"
import {UsersModule} from "./users/users.module"

describe("AppController", () => {
  let appController: AppController
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
      controllers: [AppController],
      providers: [AppService, PostService, UserService, PrismaService]
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe("Hello World!")
    })
  })
})

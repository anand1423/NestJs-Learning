import { Module } from "@nestjs/common";
import { AppContoller, AppContoller2 } from "./app.controller";

@Module({
  controllers: [AppContoller, AppContoller2],
})
export class AppModule {}

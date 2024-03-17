import { Controller, Get } from "@nestjs/common";
// http://localhost:8000
// http://localhost:8000/api
// http://localhost:8000/app
// http://localhost:8000/app/api
@Controller()
export class AppContoller {
  @Get()
  getRootRoute() {
    return "Hello World! This is the root route of our application.";
  }
  @Get("api")
  getApi() {
    return "Ceated another route";
  }
}

@Controller("app")
export class AppContoller2 {
  @Get()
  getRootRoute() {
    return "if we pass anything to controller to apply to alll";
  }
  @Get("api")
  getApi() {
    return "Ceated another route";
  }
}

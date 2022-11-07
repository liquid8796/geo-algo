"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const AppModule_1 = require("./config/AppModule");
const TimeoutInterceptor_1 = require("./config/TimeoutInterceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(AppModule_1.AppModule, { abortOnError: false });
    app.useGlobalInterceptors(new TimeoutInterceptor_1.TimeoutInterceptor());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
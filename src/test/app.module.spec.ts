import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { AppUtils } from '../app.utils';

describe('AppModule', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [AppController],
      providers: [AppService, AppUtils],
    }).compile();
  });

  it('should create the app module', () => {
    expect(app).toBeDefined();
  });

  it('should create the app controller', () => {
    const appController = app.get<AppController>(AppController);
    expect(appController).toBeDefined();
  });

  it('should create the app service', () => {
    const appService = app.get<AppService>(AppService);
    expect(appService).toBeDefined();
  });

  it('should create the app utils', () => {
    const appUtils = app.get<AppUtils>(AppUtils);
    expect(appUtils).toBeDefined();
  });
});

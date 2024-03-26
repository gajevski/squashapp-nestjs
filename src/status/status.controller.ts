import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';

@Controller('status')
export class StatusController {
    constructor(private _healthCheckService: HealthCheckService, private _http: HttpHealthIndicator) { }

    @Get('/v1/status')
    @HealthCheck()
    statusCheck() {
        return this._healthCheckService.check([
            async () => this._http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
        ]);
    }
}

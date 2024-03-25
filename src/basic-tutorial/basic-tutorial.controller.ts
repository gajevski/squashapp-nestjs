import { Body, Controller, Get, Put, UseGuards, Request } from '@nestjs/common';
import { BasicTutorialService, basicTutorialProgress } from './basic-tutorial.service';
import { JwtGuard } from 'src/auth/jwt.auth.guard';
import { BasicTutorial } from 'src/models/basic-tutorial';
import { UpdateBasicTutorialDto } from 'src/models/update-basic-tutorial';

@Controller('basic-tutorial')
export class BasicTutorialController {
    constructor(private _basicTutorialService: BasicTutorialService) { }

    @UseGuards(JwtGuard)
    @Put('/v1/basic-tutorial/progress')
    async updateBasicTutorialProgress(@Request() req, @Body() basicTutorialRequest: UpdateBasicTutorialDto) {
        return this._basicTutorialService.updateBasicTutorialProgress(req.user.userId, basicTutorialRequest);
    }

    @UseGuards(JwtGuard)
    @Get('/v1/basic-tutorial/progress')
    async getBasicTutorialProgress(@Request() req) {
        return basicTutorialProgress.find((basicTutorial: BasicTutorial) => basicTutorial.userId === req.user.userId);
    }
}

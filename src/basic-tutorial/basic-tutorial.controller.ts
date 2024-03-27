import { Body, Controller, Get, Put, UseGuards, Request } from '@nestjs/common';
import { BasicTutorialService, basicTutorialProgress } from './basic-tutorial.service';
import { JwtGuard } from 'src/auth/jwt.auth.guard';
import { BasicTutorial } from 'src/models/basic-tutorial';
import { UpdateBasicTutorialDto } from 'src/models/update-basic-tutorial';

@Controller('v1/basic-tutorial')
export class BasicTutorialController {
    constructor(private _basicTutorialService: BasicTutorialService) { }

    @UseGuards(JwtGuard)
    @Put('/progress')
    async updateBasicTutorialProgress(@Request() req, @Body() basicTutorialRequest: UpdateBasicTutorialDto) {
        return this._basicTutorialService.updateBasicTutorialProgress(req.user.userId, basicTutorialRequest);
    }

    @UseGuards(JwtGuard)
    @Get('/progress')
    async getBasicTutorialProgress(@Request() req) {
        return basicTutorialProgress.find((basicTutorial: BasicTutorial) => basicTutorial.userId === req.user.userId);
    }
}

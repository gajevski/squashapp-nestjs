import { Body, Controller, Get, Put, UseGuards, Request } from '@nestjs/common';
import { AdvancedTutorialService, advancedTutorialProgress } from './advanced-tutorial.service';
import { JwtGuard } from 'src/auth/jwt.auth.guard';
import { AdvancedTutorial } from 'src/models/advanced-tutorial';
import { UpdateAdvancedTutorialDto } from 'src/models/update-advanced-tutorial';

@Controller('v1/advanced-tutorial')
export class AdvancedTutorialController {
    constructor(private _advancedTutorialService: AdvancedTutorialService) { }

    @UseGuards(JwtGuard)
    @Put('/progress')
    async updateAdvancedTutorialProgress(@Request() req, @Body() advancedTutorialRequest: UpdateAdvancedTutorialDto) {
        return this._advancedTutorialService.updateAdvancedTutorialProgress(req.user.userId, advancedTutorialRequest);
    }

    @UseGuards(JwtGuard)
    @Get('/progress')
    async getAdvancedTutorialProgress(@Request() req) {
        return advancedTutorialProgress.find((advancedTutorial: AdvancedTutorial) => advancedTutorial.userId === req.user.userId);
    }
}

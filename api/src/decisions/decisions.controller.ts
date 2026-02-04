import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DecisionsService } from './decisions.service';
import { CreateDecisionDto } from './dto/create-decisions.dto';

@Controller('decisions')
export class DecisionsController {
  constructor(private readonly decisionsService: DecisionsService) {}
  @Post()
  createDecision(@Body() dto: CreateDecisionDto) {
    return this.decisionsService.createDecision(dto);
  }
  @Get()
  getAllDecisions() {
    return this.decisionsService.getAllDecisions();
  }
  @Get(':id')
  getDecisionById(@Param('id') id: string) {
    return this.decisionsService.getDecisionById(id);
  }
  @Patch(':id')
  updateDecision(
    @Param('id') id: string,
    @Body() dto: Partial<CreateDecisionDto>,
  ) {
    return this.decisionsService.updateDecision(id, dto);
  }
  @Delete(':id')
  deleteDecision(@Param('id') id: string) {
    return this.decisionsService.deleteDecision(id);
  }

  // REPLAYS CRUD
  @Post(':decisionId/replays')
  createReplay(
    @Param('decisionId') decisionId: string,
    @Body() dto: CreateDecisionDto,
  ) {
    return this.decisionsService.createReplay(decisionId, dto);
  }
}
 
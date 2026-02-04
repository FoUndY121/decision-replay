import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateDecisionDto } from './dto/create-decisions.dto';

@Injectable()
export class DecisionsService {
  constructor(private prisma: PrismaService) {}

  createDecision(dto: CreateDecisionDto) {
    return this.prisma.decision.create({
      data: {
        title: dto.title,
        context: dto.context,
        importance: dto.importance,
        confidence: dto.confidence,
      },
    });
  }
  getAllDecisions() {
    return this.prisma.decision.findMany();
  }
  getDecisionById(id: string) {
    return this.prisma.decision.findUnique({
      where: {
        id,
      },
    });
  }
  updateDecision(id: string, dto: Partial<CreateDecisionDto>) {
    return this.prisma.decision.update({
      where: {
        id,
      },
      data: dto,
    });
  }
  deleteDecision(id: string) {
    return this.prisma.decision.delete({
      where: {
        id,
      },
    });
  }

  // REPLAYS CRUD
  createReplay(decisionId: string, dto: CreateDecisionDto) {
    return this.prisma.replay.create({
      data: {
        decisionId: decisionId,
        whatHappened: dto.title,
        whatIThought: dto.context,
        whatIMissed: '',
        lessons: '',
        nextTime: '',
        score: dto.importance,
      },
    });
  }
}

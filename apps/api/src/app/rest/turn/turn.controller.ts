import { Turn } from '@api/domain';
import { TurnService } from '@api/service';
import { Controller, Get } from '@nestjs/common';

@Controller('turn')
export class TurnController {
  constructor(private readonly turnService: TurnService) {}

  @Get('all-turns')
  findAll(): Promise<Turn[]> {
    return this.turnService.findAll();
  }
}

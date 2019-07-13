import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turn } from '../../domain/turn/turn';

@Injectable()
export class TurnService {
  constructor(
    @InjectRepository(Turn)
    private readonly turnRepository: Repository<Turn>
  ) {}

  async findAll(): Promise<Turn[]> {
    return await this.turnRepository.find();
  }
}

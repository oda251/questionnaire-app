import { Module } from '@nestjs/common';
import { ChoiceService } from '../services/choice.service';
import { ChoiceResolver } from '../graphql/resolvers/choice.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from '@/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Choice])],
  providers: [ChoiceService, ChoiceResolver],
  exports: [ChoiceService],
})
export class ChoiceModule {}

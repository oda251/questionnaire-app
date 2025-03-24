import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question, Choice, QuestionType } from '@/entities';
import { CreateQuestionInput } from '../graphql/inputs/create-question.input';
import { UpdateQuestionInput } from '../graphql/inputs/update-question.input';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Choice)
    private choiceRepository: Repository<Choice>,
  ) {}

  async create(input: CreateQuestionInput): Promise<Question> {
    // トランザクション開始
    return await this.questionRepository.manager.transaction(
      async (transactionalEntityManager) => {
        // 1. 質問を作成
        const question = this.questionRepository.create({
          question_text: input.question_text,
          question_type: input.question_type,
          is_required: input.is_required,
        });

        const savedQuestion = await transactionalEntityManager.save(
          Question,
          question,
        );

        // 2. 選択肢がある場合は作成
        if (
          input.question_type === QuestionType.MULTIPLE_CHOICE ||
          (input.question_type === QuestionType.SINGLE_CHOICE && input.choices)
        ) {
          const choiceEntities = input.choices!.map((c) =>
            this.choiceRepository.create({
              choice_text: c.choice_text,
              question: savedQuestion, // リレーションを設定
            }),
          );

          await transactionalEntityManager.save(Choice, choiceEntities);
        }

        // 3. 関連データを含めて取得
        const result = await transactionalEntityManager.findOne(Question, {
          where: { id: savedQuestion.id },
          relations: { choices: true },
        });

        if (!result) {
          throw new BadRequestException('質問の作成に失敗しました');
        }

        return result;
      },
    );
  }

  async findAll(): Promise<Question[]> {
    return this.questionRepository.find();
  }

  async findOne(id: number): Promise<Question> {
    return this.questionRepository.findOneOrFail({ where: { id: id } });
  }

  async update(id: number, input: UpdateQuestionInput): Promise<Question> {
    await this.questionRepository.update(id, input);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.questionRepository.delete(id);
  }
}

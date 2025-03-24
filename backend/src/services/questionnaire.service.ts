import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Questionnaire, Question } from '@/entities';
import { CreateQuestionnaireInput } from '@/graphql/inputs/create-questionnaire.input';
import { UpdateQuestionnaireInput } from '@/graphql/inputs/update-questionnaire.input';
import { DeepPartial } from 'typeorm';

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectRepository(Questionnaire)
    private questionnaireRepository: Repository<Questionnaire>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async create(input: CreateQuestionnaireInput): Promise<Questionnaire> {
    return await this.questionnaireRepository.manager.transaction(
      async (transactionalEntityManager) => {
        // 1. アンケートの基本情報だけを作成
        const questionnaireData: DeepPartial<Questionnaire> = {
          user_id: input.user_id,
          title: input.title,
          description: input.description,
          is_public: input.is_public,
          expiry_date: input.expiry_date,
        };

        const questionnaire =
          this.questionnaireRepository.create(questionnaireData);
        const savedQuestionnaire =
          await transactionalEntityManager.save(questionnaire);

        // 2. 質問の作成
        if (input.questions?.length) {
          const questionEntities = input.questions.map((q) => {
            const questionData: DeepPartial<Question> = {
              question_text: q.question_text,
              question_type: q.question_type,
              is_required: q.is_required,
              questionnaire_id: savedQuestionnaire.id,
            };

            return this.questionRepository.create(questionData);
          });

          // 作成した質問エンティティを保存
          await transactionalEntityManager.save(Question, questionEntities);
        }

        // // 3. 組織との関連付け
        // if (input.organization_ids?.length) {
        //   const orgRelations = input.organization_ids.map((orgId) => ({
        //     questionnaire_id: savedQuestionnaire.id,
        //     organization_id: orgId,
        //   }));
        //   await transactionalEntityManager.save(
        //     orgRelations,
        //   );
        // }

        // 4. 関連データを含めて取得
        const result = await transactionalEntityManager.findOne(Questionnaire, {
          where: { id: savedQuestionnaire.id },
          relations: ['questions', 'organizations'],
        });
        if (!result) {
          throw new Error('Failed to create questionnaire');
        }
        return result;
      },
    );
  }

  async findAll(): Promise<Questionnaire[]> {
    return this.questionnaireRepository.find();
  }

  async findByUserId(userId: string): Promise<Questionnaire[]> {
    return this.questionnaireRepository.find({ where: { user_id: userId } });
  }

  async findOne(id: string): Promise<Questionnaire> {
    return this.questionnaireRepository.findOneOrFail({ where: { id: id } });
  }

  async update(
    id: string,
    input: UpdateQuestionnaireInput,
  ): Promise<Questionnaire> {
    await this.questionnaireRepository.update(id, input);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.questionnaireRepository.delete(id);
  }
}

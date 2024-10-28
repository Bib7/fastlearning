import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { envsVariables } from './env';
import { ChatCompletionMessage } from 'openai/resources';
import { OpenAIError } from 'openai/error';

// it must initialize openIA service only;
// it must initialize how IA should work around sys and how it should intermediate between user-sys
// Also can be checkable to use preview data from user to use RAG responses from IA
// Futhermore must choose between IA services that fits better to given content questions
@Injectable()
export class OpenIAService {
  private newOpen: OpenAI;
  private apikey: string;
  public goal: string;
  public content: string;
  public period: string;
  constructor() {
    const key = envsVariables.safeParse(process.env.APIKEY);
    if (key.success) {
      this.apikey = key.data.APIKEY;
      this.newOpen = new OpenAI({ apiKey: this.apikey });
    }
    throw new OpenAIError(`APIKEY is mandatory`);
  }
  // Set initial settings to generate a roadmap;
  async setRoadmapSettings(
    content: string,
    goal: string,
    period: string,
  ): Promise<void> {
    this.goal = goal;
    this.content = content;
    this.period = period;
  }
  // Generate a roadmap based on settings given;
  async generateRoadmap(): Promise<ChatCompletionMessage> {
    const newMessage = this.newOpen.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `Answer as if you're a tutor of a studant that need to achieve ${this.goal} related to ${this.content} in ${this.period}
            using the method from ultralearning book of by Scott H. Young, given him a roadmap as JSON format where phases & weeks (1, 2, 3 ...) are
            the upper most objects, which each week has a minor goal, content it must learn and pratice session. The JSON must be like this: {
            "roadmap": { phase_1: { weeks: { week_1: { "content": "text", goal: "text", content: "text"}}}}}`,
        },
        {
          role: 'user',
          content: `Give me a roadmap of ${this.content}`,
        },
      ],
    });
    const messageResult = (await newMessage).choices[0].message;
    return messageResult;
  }
}

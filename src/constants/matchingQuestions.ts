import { IQuestion } from '@/types/pages/matchingQuestions'

export const questions = ({ allFieldsData, frameWorks }: Record<string, any>): IQuestion[] => [
  {
    label: 'Programming languages you have basic knowledge in',
    name: 'basicProgrammingLanguagesKnowledge',
    QuestionChoices: [
      {
        name: 'C',
      },
      {
        name: 'C++',
      },
      {
        name: 'C#',
      },
      {
        name: 'Java',
      },
      {
        name: 'Python',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'Go',
      },
      {
        name: 'Dart',
      },
    ],
  },
  {
    label: 'Programming languages you are proficient in',
    name: 'proficientProgrammingLanguages',
    QuestionChoices: [
      {
        name: 'C',
      },
      {
        name: 'C++',
      },
      {
        name: 'C#',
      },
      {
        name: 'Java',
      },
      {
        name: 'Python',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'Go',
      },
      {
        name: 'Dart',
      },
    ],
  },
  {
    label: 'Preferred learning style',
    name: 'preferredLearningStyle',
    QuestionChoices: [
      {
        name: 'Books and Articles',
      },
      {
        name: 'Videos',
      },
      {
        name: 'Documentations',
      },
      {
        name: 'Interactive Platforms',
      },
    ],
  },
  {
    label: 'What is your preferred way of communication?',
    name: 'preferredCommunicationMethod',
    QuestionChoices: [
      {
        name: 'Chat',
      },
      {
        name: 'Email',
      },
      {
        name: 'Video Calls',
      },
    ],
  },
  {
    label: 'Which tracks are you interested in?',
    name: 'TrackOfInterest',
    QuestionChoices: allFieldsData,
  },
  {
    label: 'Which technology/framework are you interested in?',
    name: 'technologyOfInterest',
    QuestionChoices: frameWorks,
  },
  {
    label: 'What is your frequency in learning?',
    name: 'learningFrequency',
    maxLength: 1,
    QuestionChoices: [
      {
        name: 'Daily',
      },
      {
        name: 'Weekly',
      },
      {
        name: 'Monthly',
      },
    ],
  },
  {
    label: 'How many hours per week are you willing to dedicate to learning and collaborating?',
    name: 'weeklyHoursDedicatedToLearningAndCollaboration',
    type: 'number',
  },
  {
    label: 'What motivates you to learn and collaborate with others?',
    name: 'motivationForLearningAndCollaboration',
    maxLength: 1,
    QuestionChoices: [
      {
        name: 'career advancement',
      },
      {
        name: 'personal interest',
      },
      {
        name: 'skill development',
      },
    ],
  },
  {
    label: 'What specific goals do you hope to achieve through our platform?',
    name: 'goalsOnThePlatform',
    maxLength: 1,
    QuestionChoices: [
      {
        name: 'choice 1',
      },
      {
        name: 'choice 2',
      },
      {
        name: 'choice 3',
      },
      {
        name: 'uchoice 4',
      },
    ],
  },
  {
    label: 'Are you comfortable with remote work or collaboration?',
    name: 'comfortLevelWithRemoteWorkOrCollaboration',
    type: 'single',
    QuestionChoices: [
      {
        name: 'yes',
        value: 'true',
      },
      {
        name: 'no',
        value: 'false',
      },
    ],
  },
  {
    label: 'What type of projects are you interested in collaborating on?',
    name: 'projectTypeInterest',
    maxLength: 1,
    QuestionChoices: [
      {
        name: 'open source',
      },
      {
        name: 'freelance',
      },
      {
        name: 'personal',
      },
    ],
  },
]

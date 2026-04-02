export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  category: string
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 2,
    category: 'Geography',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 1,
    category: 'Science',
  },
  {
    id: 3,
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['Charles Dickens', 'Mark Twain', 'William Shakespeare', 'Jane Austen'],
    correctAnswer: 2,
    category: 'Literature',
  },
  {
    id: 4,
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 3,
    category: 'Geography',
  },
  {
    id: 5,
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    category: 'Science',
  },
  {
    id: 6,
    question: 'In which year did the first iPhone launch?',
    options: ['2005', '2006', '2007', '2008'],
    correctAnswer: 2,
    category: 'Technology',
  },
  {
    id: 7,
    question: 'How many sides does a hexagon have?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    category: 'Mathematics',
  },
  {
    id: 8,
    question: 'Which country is home to the kangaroo?',
    options: ['South Africa', 'Brazil', 'India', 'Australia'],
    correctAnswer: 3,
    category: 'Geography',
  },
  {
    id: 9,
    question: 'What does CPU stand for?',
    options: [
      'Central Processing Unit',
      'Computer Personal Unit',
      'Central Program Utility',
      'Core Processing Unit',
    ],
    correctAnswer: 0,
    category: 'Technology',
  },
  {
    id: 10,
    question: 'Which element has the atomic number 1?',
    options: ['Helium', 'Oxygen', 'Hydrogen', 'Carbon'],
    correctAnswer: 2,
    category: 'Science',
  },
]

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isFavorite = false;
  learningPaths: any[] = [
    {
      id: 1,
      title: 'React Native',
      img: '../../../assets/public/images/paths/react_40x40@2x.png',
      progress: 80,
      totalCourses: 18,
      description: 'Learn the fundamentals of working with React Native and how to create basic applications.',
      timeLeft: '50 minutes',
      lessons: 12,
      isFavorite: false
    },
    {
      id: 2,
      title: 'Dev Ops',
      img: '../../../assets/public/images/paths/devops_40x40@2x.png',
      progress: 70,
      totalCourses: 15,
      description: 'Learn the fundamentals of working with Dev Ops and how to create basic applications.',
      timeLeft: '40 minutes',
      lessons: 10,
      isFavorite: false
    },
    {
      id: 3,
      title: 'Redis',
      img: '../../../assets/public/images/paths/redis_40x40@2x.png',
      progress: 70,
      totalCourses: 15,
      description: 'Learn the fundamentals of working with Redis and how to create basic applications.',
      timeLeft: '20 minutes',
      lessons: 12,
      isFavorite: false
    },
    {
      id: 3,
      title: 'MailChimp',
      img: '../../../assets/public/images/paths/mailchimp_40x40@2x.png',
      progress: 80,
      totalCourses: 18,
      description: 'Learn the fundamentals of working with MailChimp and how to create basic applications.',
      timeLeft: '45 minutes',
      lessons: 12,
      isFavorite: false
    },
    {
      id: 5,
      title: 'Swift',
      img: '../../../assets/public/images/paths/swift_40x40@2x.png',
      progress: 70,
      totalCourses: 15,
      description: 'Learn the fundamentals of working with Swift and how to create basic applications.',
      timeLeft: '40 minutes',
      lessons: 10,
      isFavorite: false
    },
    {
      id: 6,
      title: 'WordPress',
      img: '../../../assets/public/images/paths/wordpress_40x40@2x.png',
      progress: 70,
      totalCourses: 15,
      description: 'Learn the fundamentals of working with WordPress and how to create basic applications.',
      timeLeft: '20 minutes',
      lessons: 12,
      isFavorite: false
    },
  ];
  courses: Course[] = [
    {
      id: 1,
      title: 'Learn Sketch',
      author: 'Elijah Murray',
      description: 'Learn the fundamentals of working with Angular and how to create basic applications.',
      duration: '6',
      lessons: 12,
      objectives: [
        "Fundamentals of working with Angular",
        "Create complete Angular applications",
        "Working with the Angular CLI",
        "Understanding Dependency Injection",
        "Testing with Angular",
      ],
      level: 'beginner',
      rating: 4,
      image: "../../../assets/public/images/paths/sketch_430x168.png",
      image2x: "../../../assets/public/images/paths/sketch_40x40@2x.png",
      isFavorite: false
    },
    {
      id: 2,
      title: 'Learn Flinto',
      author: 'Elijah Murray',
      description: 'Learn the fundamentals of working with Flinto and how to create basic applications.',
      duration: '6',
      lessons: 12,
      objectives: [
        "Fundamentals of working with Angular",
        "Create complete Angular applications",
        "Working with the Angular CLI",
        "Understanding Dependency Injection",
        "Testing with Angular",
      ],
      level: 'beginner',
      rating: 4,
      image: "../../../assets/public/images/paths/flinto_430x168.png",
      image2x: "../../../assets/public/images/paths/flinto_40x40@2x.png",
      isFavorite: false
    },
    {
      id: 3,
      title: 'Learn Photoshop',
      author: 'Elijah Murray',
      description: 'Learn the fundamentals of working with Photoshop and how to create basic applications.',
      duration: '6',
      lessons: 12,
      objectives: [
        "Fundamentals of working with Angular",
        "Create complete Angular applications",
        "Working with the Angular CLI",
        "Understanding Dependency Injection",
        "Testing with Angular",
      ],
      level: 'beginner',
      rating: 4,
      image: "../../../assets/public/images/paths/photoshop_430x168.png",
      image2x: "../../../assets/public/images/paths/photoshop_40x40@2x.png",
      isFavorite: false
    },
    {
      id: 4,
      title: 'Learn Figma',
      author: 'Elijah Murray',
      description: 'Learn the fundamentals of working with Figma and how to create basic applications.',
      duration: '6',
      lessons: 12,
      objectives: [
        "Fundamentals of working with Angular",
        "Create complete Angular applications",
        "Working with the Angular CLI",
        "Understanding Dependency Injection",
        "Testing with Angular",
      ],
      level: 'beginner',
      rating: 4,
      image: "../../../assets/public/images/paths/figma_430x168.png",
      image2x: "../../../assets/public/images/paths/figma_40x40@2x.png",
      isFavorite: false
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite(type: string, index: number) {
    const elements = (type === 'learningPath') ? this.learningPaths : this.courses;
    const element = elements[index];
    element ? elements[index] = { ...element, isFavorite: !element.isFavorite } : null;
  }
}
export interface Course {
  id: number;
  title: string;
  author: string;
  rating: number;
  duration: string;
  objectives: string[];
  lessons: number;
  image: string;
  image2x: string;
  level: string;
  description: string;
  isFavorite: boolean;
}

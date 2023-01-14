import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isFavorite = false;
  courses :any[] = [
    {
      id: 1,
      title: 'React Native',
      img: '../../../assets/public/images/paths/react_40x40@2x.png',
      progress: 80,
      totalCourses: 18,
      description: 'Learn the fundamentals of working with React Native and how to create basic applications.',
      timeLeft: '50 minutes',
      lessons: 12,
      isFavorite: false,
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
      title: 'Redis' ,
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
      title: 'WordPress' ,
      img: '../../../assets/public/images/paths/wordpress_40x40@2x.png',
      progress: 70,
      totalCourses: 15,
      description: 'Learn the fundamentals of working with WordPress and how to create basic applications.',
      timeLeft: '20 minutes',
      lessons: 12,
      isFavorite: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}

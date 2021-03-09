import { Component, OnInit } from '@angular/core';

interface ICourse {
    name: string;
    imageUrl: string;
    price: number;
}

@Component({
    selector: 'app-course-list-message',
    templateUrl: './course-list-message.component.html',
    styleUrls: ['./course-list-message.component.css'],
    styles: [':host {width: 100%} '],
})
export class CourseListMessageComponent implements OnInit {
    courses: ICourse[] = [
        {
            name: 'Course A',
            imageUrl:
                'https://leverageedu.com/blog/wp-content/uploads/2019/08/Course-after-MBA.png',
            price: 100,
        },
        {
            name: 'Course B',
            imageUrl:
                'https://leverageedu.com/blog/wp-content/uploads/2019/08/Course-after-MBA.png',
            price: 75,
        },
        {
            name: 'Course C',
            imageUrl:
                'https://leverageedu.com/blog/wp-content/uploads/2019/08/Course-after-MBA.png',
            price: 120,
        },
        {
            name: 'Course D',
            imageUrl:
                'https://leverageedu.com/blog/wp-content/uploads/2019/08/Course-after-MBA.png',
            price: 50,
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

interface ICourse {
    name: string;
    imageUrl: string;
    price: number;
    percentage: number;
    discountedPrice: string;
}

@Component({
    selector: 'app-course-list-message',
    templateUrl: './course-list-message.component.html',
    styleUrls: ['./course-list-message.component.css'],
    styles: [':host {width: 100%} '],
})
export class CourseListMessageComponent implements OnInit {
    courses: ICourse[] = [];
    loading: boolean = false;
    apiBaseURL: string = 'https://course-recommendation-api.herokuapp.com';
    defaultImageUrl: string =
        'https://leverageedu.com/blog/wp-content/uploads/2019/08/Course-after-MBA.png';

    constructor() {}

    ngOnInit(): void {
        this.loading = true;

        const recommendationUrl = `${this.apiBaseURL}/recommend/${1}`;
        fetch(recommendationUrl)
            .then((res) => res.json())
            .then((data: ICourse[]) => {
                this.courses = data.map((courseInfo) => {
                    return {
                        ...courseInfo,
                        imageUrl: courseInfo.imageUrl || this.defaultImageUrl,
                    };
                });
                this.loading = false;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

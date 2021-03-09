import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
    @Input() name: string = '';
    @Input() image: string = '';
    @Input() price: number = 0;

    constructor() {}

    ngOnInit(): void {}
}

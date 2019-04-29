import { Injectable } from '@angular/core';

export interface Article {
    title: string,
    date: Date,
    tags: Array<string>,
    imageUrl: string,
    image: string,
    html: string,
    shortText: string
}

@Injectable()
export class ArticleService {
    constructor() { }

    getArticles(): Array<Article>{
        return [
            {
                title: 'My first article',
                shortText: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(),
                html: "article1.html",
                image: '',
                imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                tags: ['Angular', 'Security', 'TypeScript']
            },
            {
                title: 'My second article',
                shortText: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(),
                html: "article1.html",
                image: '',
                imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                tags: ['Angular', 'Security', 'TypeScript']
            },
            {
                title: 'My third article',
                shortText: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(),
                html: "article1.html",
                image: '',
                imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                tags: ['Angular', 'Security', 'TypeScript']
            }
        ]
    }
}

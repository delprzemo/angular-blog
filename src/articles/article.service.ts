import { Injectable } from '@angular/core';

export interface Article {
    id: number,
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

    getArticleById(id: number | string) {
        return this.getArticles().find(x=>x.id == id);
    }

    getArticles(): Array<Article>{
        return [
            {
                id: 1,
                title: 'My first article which will contain longer title',
                shortText: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(2017, 1, 2),
                html: "article1.html",
                image: '',
                imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                tags: ['Angular', 'Security', 'TypeScript']
            },
            {
                id: 2,
                title: 'My second article',
                shortText: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(),
                html: "easy-blog.html",
                image: '',
                imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                tags: ['Angular', 'Security', 'TypeScript']
            },
            {
                id: 3,
                title: 'My third article',
                shortText: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(),
                html: "article1.html",
                image: '',
                imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                tags: ['Angular', 'Security', 'TypeScript', 'Test']
            },
            {
                id: 4,
                title: 'My first article which will contain longer title which will contain longer title longer',
                shortText: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(2017, 1, 2),
                html: "article1.html",
                image: '',
                imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                tags: ['Angular', 'Security', 'TypeScript']
            },
            {
                id: 5,
                title: 'My second article which will contain longer title',
                shortText: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(),
                html: "easy-blog.html",
                image: '',
                imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                tags: ['Angular', 'Security', 'TypeScript']
            },
            {
                id: 6,
                title: 'My third article',
                shortText: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(),
                html: "article1.html",
                image: '',
                imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                tags: ['Angular', 'Security', 'TypeScript', 'Test']
            }
        ]
    }
}

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

    getArticlesByText(text: string, take: number) {
        return this.getArticles().filter(x=>
            x.title.toLowerCase().indexOf(text.toLowerCase()) > -1
            || x.shortText.toLowerCase().indexOf(text.toLowerCase()) > -1
            || x.tags.some(x=>x.toLowerCase().indexOf(text.toLowerCase()) > -1))
            .slice(0, take).sort( (a, b) => a.date < b.date ? 1 : -1 );
    }

    getArticlesThrottle(take: number) {
        return this.getArticles().slice(0, take).sort( (a, b) => a.date < b.date ? 1 : -1 );
    }

    getArticles(): Array<Article>{
        return [
            {
                id: 1,
                title: 'My first article which will contain longer title',
                shortText: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(2019, 5, 1),
                html: "article1.html",
                image: '/assets/blog-item.jpg',
                imageUrl: '',
                tags: ['Angular', 'Security', 'TypeScript']
            },
            {
                id: 2,
                title: 'Second sample article with TypeScript',
                shortText: ' Typescript is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. That what TypeScript is.',
                date: new Date(2019, 4, 1),
                html: "article1.html",
                image: '',
                imageUrl: 'https://www.robertcooper.me/static/0cf501bada61bd930003ec6c08be25fa/75740/banner.png',
                tags: ['TypeScript', 'Design patterns']
            },
            {
                id: 3,
                title: 'Angular! Quo Vadis?',
                shortText: 'What is Angular? I will tell you. The Shiba Angular is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(2019, 3, 1),
                html: "article1.html",
                image: '',
                imageUrl: 'https://blog.jscrambler.com/content/images/2018/01/protecting-angular-js-app.png',
                tags: ['Angular', 'Security']
            },
            {
                id: 4,
                title: 'Feature of programmer. Light or dark?',
                shortText: ' Ut lobortis justo faucibus suscipit facilisis. Sed tortor urna, finibus vel quam vitae, mattis suscipit magna. Sed aliquam nunc in est tempus posuere. Vestibulum at mauris tellus.',
                date: new Date(2019, 2, 11),
                html: "article1.html",
                image: '',
                imageUrl: 'https://cdn-images-1.medium.com/max/2600/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg',
                tags: ['Lifestyle', 'Programmer', 'Feature']
            },
            {
                id: 5,
                title: 'Remote work - like or not?',
                shortText: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
                date: new Date(2018, 5, 1),
                html: "easy-blog.html",
                image: '',
                imageUrl: 'https://www.viajesycosasasi.com/wp-content/uploads/2014/08/nomada-digital-laptop.jpg',
                tags: ['Remote']
            }
        ].sort( (a, b) => a.date < b.date ? 1 : -1 );
    }
}

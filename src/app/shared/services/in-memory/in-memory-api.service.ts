import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryApiService implements InMemoryDbService {
  createDb() {
    const posts = [
      {
        id: 1,
        name: 'Pope Francis',
        voteDescription: 'He\'s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
        isMain: true,
        expireDate: '2020-06-20',
        createdDate: '2020-03-28T01:30',
        media: '/assets/people/papa_francisco.jpg',
        wikiPath: 'https://es.wikipedia.org/wiki/Francisco_(papa)',
        categoryName: 'Religion'
      },
      {
        id: 2,
        name: 'Kanye West',
        voteDescription: 'Is he the best rapper in the world?',
        isMain: false,
        expireDate: null,
        createdDate: '2020-02-28T01:30',
        media: '/assets/people/kanye_west.png',
        wikiPath: 'https://es.wikipedia.org/wiki/Kanye_West',
        categoryName: 'Entertainment'
      },
      {
        id: 3,
        name: 'Malala Yousafzai',
        voteDescription: 'Do you agree with the Nobel Prize awarded to Malala in 2014?',
        isMain: false,
        expireDate: null,
        createdDate: '2020-01-01T00:00',
        media: '/assets/people/malala_yousafzai.jpeg',
        wikiPath: 'https://es.wikipedia.org/wiki/Malala_Yousafzai',
        categoryName: 'Entertainment'
      },
      {
        id: 4,
        name: 'Cristina Fernandez de Kirchner',
        voteDescription: 'Do you think Cristina\'s Peronist policies were correct in her past mandate?',
        isMain: false,
        expireDate: null,
        createdDate: '2020-02-10T00:00',
        media: '/assets/people/cristina_de_kirchner.jpg',
        wikiPath: 'https://es.wikipedia.org/wiki/Cristina_Fern%C3%A1ndez_de_Kirchner',
        categoryName: 'Politics'
      },
      {
        id: 5,
        name: 'Mark Zuckerberg',
        voteDescription: 'Do you think mark is applying data protection policies correctly?',
        isMain: false,
        expireDate: null,
        createdDate: '2020-02-28T01:00',
        media: '/assets/people/mark_zuckerberg.jpg',
        wikiPath: 'https://es.wikipedia.org/wiki/Mark_Zuckerberg',
        categoryName: 'Business'
      }
    ];

    return {
      posts
    };
  }
}

import { trigger, state, animate, transition, style } from '@angular/core';

export let FadeInAndOut= trigger('fadeInOut', [
    state('in', style({ opacity: 1 })),
     state('out', style({ opacity: 0 })),
    transition('void => in', [
      style({ opacity: 0 }),
      animate(600)
    ]),
    transition('in => out', [
      style({ opacity: 1 }),
      animate(600)
    ])
  ]);
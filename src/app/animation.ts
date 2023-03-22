import { style, transition, trigger, animate } from "@angular/animations";

export let fade = trigger('fade', [
    transition('void => *', [
      style({backgroundColor: 'yellow', opacity: 0}),
      animate(2000, style({backgroundColor: 'transparent', opacity: 1, transform: 'translateX(20px)'}))
    ]),
    transition('* => void', [
      style({backgroundColor: 'transparent', opacity: 1}),
      animate(2000, style({backgroundColor: 'pink', opacity: 0, transform: 'translateX(-20px)'}))
    ])
  ])
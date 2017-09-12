import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        this is secured!
    `
})
export class SecuredComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
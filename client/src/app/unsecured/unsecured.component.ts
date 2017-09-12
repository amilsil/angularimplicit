import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        this is not protected!
    `
})
export class UnsecuredComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
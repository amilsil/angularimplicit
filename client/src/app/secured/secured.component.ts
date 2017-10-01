import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'app/common/services/auth.service';
import { User } from 'oidc-client';
import { Subscription } from 'rxjs';

@Component({
    template: `
        <h3>this page is secured!</h3>

        <pre>{{ user | json }}</pre>
    `
})
export class SecuredComponent implements OnInit, OnDestroy {
    userSub: Subscription;
    user: User;

    constructor(private authService: AuthService) {
        this.userSub = this.authService.userLoadededEvent.subscribe(u => this.user = u);
    }

    ngOnInit() { }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}

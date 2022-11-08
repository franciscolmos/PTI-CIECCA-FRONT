import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authenticacion.service';
import { HttpClient } from '@angular/common/http';

@Component(
    { selector: 'app-login',
      templateUrl: 'login.component.html',
      styleUrls: ['login.component.scss']
    })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    async onSubmit() {
        this.authenticationService.login(this.f.username.value, this.f.password.value)
        .subscribe(
            data => {
                console.log('data', data)
                this.router.navigate(['/dashboard']);
            },
            error => {
                alert('Se rrompió')
                this.alertService.error(error);
                this.loading = false;
            });

        // ESTO VA CUANDO LE PEGUEMOS A UN SERVICIO HTTP
        /* .subscribe(
            data => {
                console.log('data', data)
                this.router.navigate(['/dashboard']);
            },
            error => {
                alert('Se rrompió')
                this.alertService.error(error);
                this.loading = false;
            }); */
    }
}
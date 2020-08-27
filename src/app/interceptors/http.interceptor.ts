import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as pochito from '../mocks/test.json';
import { ok } from 'assert';
import { mergeMap } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';

const PRODUCTS_URL = "http://localhost:3000/products";


@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('soy nuevo' + request.url);

        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(handleRoute);

        function handleRoute() {
            if ((url.endsWith('/products')) && method === 'GET') {
                return getProducts();
            } else if (url.endsWith('/products/register') && method === 'POST') {
                return register();
            } else {
                // pass through any requests not handled above
                return next.handle(request);
            }
        }

        // route functions
        function getProducts() {
            const body: any = ((pochito) as any).default;
            return ok(body);
        }

        function register() {
            const product = body;
            const products: any = ((pochito) as any).default;

            product.id = products.length ? Math.max(...products.map(x => x.id)) + 1 : 1;
            products.push(product);

            return ok();
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        /*if (request.url === PRODUCTS_URL) {
            console.log('Loaded from JSON: ' + request.url);
            return of(new HttpResponse({ status: 200, body: ((data) as any).default }));
        }

        return next.handle(request);*/
    }
}

/*

*/
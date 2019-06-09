import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloLink, FetchResult, NextLink, Operation } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, ApolloModule, HttpLinkModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  	constructor(private apollo: Apollo, private httpLink: HttpLink) {
		this.configureApolloClient();
	}

	/** configures Apollo client to access GraphQL Application Programming Interface */
	private configureApolloClient(): void {
		const uri: string = 'https://countries.trevorblades.com/';
		const apolloAngularHTTPLink = this.httpLink.create({uri});

		this.apollo.create({
				link: apolloAngularHTTPLink,
				cache: new InMemoryCache()
			}
		);
	}

}

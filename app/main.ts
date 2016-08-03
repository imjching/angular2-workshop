import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provideForms, disableDeprecatedForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { RedditService } from './reddit.service';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), HTTP_PROVIDERS, RedditService]);

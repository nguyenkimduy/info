import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainsComponent } from './views/mains/mains.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { AboutComponent } from './views/layout/about/about.component';
import { ServicesComponent } from './views/layout/services/services.component';
import { GalleryComponent } from './views/layout/gallery/gallery.component';
import { BlogComponent } from './views/layout/blog/blog.component';
import { ContactComponent } from './views/layout/contact/contact.component';
import { FooterComponent } from './views/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainsComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './students/home/home.component';
import { CoursesComponent } from './students/courses/courses.component';
import { PathsComponent } from './students/paths/paths.component';
import { PricingComponent } from './students/pricing/pricing.component';
import { TeachersComponent } from './students/teachers/teachers.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    PathsComponent,
    PricingComponent,
    TeachersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent  },
      {path:'home',component: HomeComponent  },
      {path:'courses',component: CoursesComponent  },
      {path:'paths',component: PathsComponent  },
      {path:'pricing',component: PricingComponent  },
      {path:'teachers',component: TeachersComponent  },
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

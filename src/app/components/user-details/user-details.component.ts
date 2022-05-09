import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  catchError,
  filter,
  finalize,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { GithubService } from 'src/app/services/github.service';

interface someInfo {
  full_name: string;
  updated_at: Date;
  description: string;
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  // try to not use !: cuz it can cause unpredicted behavior
  // repos!: string;
  // add type
  reposDetails: Observable<Array<someInfo>>;
  // githubservice use camel case pls
  constructor(
    private active: ActivatedRoute,
    private githubservice: GithubService,
    private route: Router
  ) {
    // instead of you can try something like
    this.reposDetails = this.active.params.pipe(
      map((el) => el['id'] as string),
      switchMap((el) => {
        return this.githubservice.getData(el).pipe(
          finalize(() => {
            console.log('Success done!');
          }),
          catchError(() => {
            alert('You have enter wrong repository!!! ');
            // pls you string 'search' from const
            this.route.navigate(['search']);
            return of();
          }),
          map((el: any) => {
            console.log(this.reposDetails);
            return el.items as Array<someInfo>;
          })
        );
      })
    );
  }

  ngOnInit(): void {
    // this.active.params.subscribe((params) => {
    //   this.repos = params['id'];
    //   console.log('params =', this.repos);
    // });
    // this.githubservice.getData(this.repos).subscribe({
    //   complete: () => {
    //     console.log('Success done!');
    //   },
    //   error: () => {
    //     alert('You have enter wrong repository!!! ');
    //     // pls you string 'search' from const
    //     this.route.navigate(['search']);
    //   },
    //   next: (data: any = []) => {
    //     this.reposDetails = data.items;
    //     console.log(this.reposDetails);
    //   },
    // });
  }
}

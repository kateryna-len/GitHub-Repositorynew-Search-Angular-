import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  repos !: string;
  reposDetails: any;

  constructor(private active: ActivatedRoute, private githubservice: GithubService, private route: Router) { }

  ngOnInit(): void {

    this.active.params.subscribe(params => {
      this.repos = params['id']
      console.log("params =", this.repos)

    })

    this.githubservice.getData(this.repos).subscribe({
      complete: () => { console.log('Success done!') },
      error: () => {
        alert("You have enter wrong repository!!! ")
        this.route.navigate(['search'])
      },
      next: (data: any = []) => {
        this.reposDetails = data.items
        console.log(this.reposDetails)
      }
    })
  }

}

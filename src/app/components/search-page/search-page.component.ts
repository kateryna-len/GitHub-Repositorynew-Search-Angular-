import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchForm !: FormGroup;
  repos !: any;

  constructor(private route: Router) { }

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      repos: new FormControl(
        null,
        [Validators.required]
      )
    })
  }

  getRepos() {
    console.log(this.searchForm.value)
    this.repos = this.searchForm.value.repos
    this.route.navigate([`repository/${this.repos}`])


  }

}

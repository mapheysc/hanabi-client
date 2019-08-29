import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;
  usersGames = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private toastr: ToastrService,
    private location: Location
    ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.getUser(params.id);
    });
  }

  getUser(userId) {
    this.userService.getUser(userId).subscribe(res => {
      this.user = res;
      this.user.id = userId;
      this.user.games.forEach(game => {
        this.usersGames.push({owns: false, game});
      });
      this.user.owns.forEach(game => {
        this.usersGames.push({owns: true, game});
      });
      console.log(this.user);
    }, err => {
      this.toastr.error('Oops, there was an error retrieving the user');
      this.location.back();
    });
  }

}

import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "../models/user.model";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.scss"]
})
export class UserlistComponent implements OnInit {
  public filteredUsers: User[];
  public error: string = "";
  public query: string = "";
  public datequery: { day: number; month: number; year: number };
  private users: User[];
  private datepipe: DatePipe = new DatePipe("en");

  constructor(private userService: UserService) {
    this.userService.getusers().subscribe((data) => {
      if ((data as any).success) {
        this.users = (data as any).users;
        this.refillFilteredUsers();
      } else {
        this.error = (data as any).error;
      }
    });
  }

  refillFilteredUsers() {
    this.filteredUsers = this.users;
  }

  filter() {
    if(this.datequery != undefined && this.datequery != null && this.datequery.day != undefined && this.datequery.month != undefined && this.datequery.year != undefined) {
      let datequery = this.datepipe.transform(
        this.datequery.year + "-" + this.datequery.month + "-" + this.datequery.day
        ,"yyyy-MM-dd"
      );

      this.filteredUsers = this.filteredUsers.filter(
        (item) =>
          item.date_created !== null &&
          new RegExp(datequery, "gi").test(item.date_created)
      );
    }
    else if(this.query != "") {
      let fieldsToSearch = ["email", "username"];
      this.filteredUsers = this.users.filter((item) =>
        fieldsToSearch.some(
          (key) =>
            item.hasOwnProperty(key) &&
            new RegExp(this.query.toLowerCase(), "gi").test(
              item[key].toLowerCase()
            )
        )
      );
    }
    else {
      this.refillFilteredUsers();
    }
  }

  ngOnInit(): void {}
}

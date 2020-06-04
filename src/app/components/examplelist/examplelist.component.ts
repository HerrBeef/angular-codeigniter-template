import { Component, OnInit } from "@angular/core";
import { Example } from "../../models/example.model";
import { ExampleService } from "../../services/example.service";

@Component({
  selector: "app-examplelist",
  templateUrl: "./examplelist.component.html",
  styleUrls: ["./examplelist.component.scss"],
})
export class ExamplelistComponent implements OnInit {

  public error: string = "";
  public query: string = "";
  public examples: Example[];

  constructor(private exampleService: ExampleService) {
    this.exampleService.getexamples().subscribe((data) => {
      if ((data as any).success) {
        this.examples = (data as any).examples;
      } else {
        this.error = (data as any).error;
      }
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { BoredService } from 'src/app/Services/bored.service';

interface Activity {
  accessibility: number;
  activity: string;
  key: string;
  link: string;
  participants: number;
  price: number;
  type: string;
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private boredService: BoredService) { }
  public activity: Activity;
  activityCookie: string;

  ngOnInit(): void {
    
    this.boredService.getActivity().subscribe((data: Activity) => {
      this.activity = data;
      this.setCookie("Activity", this.activity.activity, 0);
      this.setCookie("Type", this.activity.type, 0);
      this.setCookie("Participants", this.activity.participants, 0);
      this.setCookie("Key", this.activity.key, 0);
    })
  }

  setCookie(name,value,days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  seeCookies(){
    return document.cookie.split(";");
  }

}

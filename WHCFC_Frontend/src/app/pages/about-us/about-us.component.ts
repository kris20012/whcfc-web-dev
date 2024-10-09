import { Component } from '@angular/core';
import { AboutUsSectionComponent } from '../../components/about-us-section/about-us-section.component';
import { MissionComponent } from '../../components/mission/mission.component';
import { VisionComponent } from '../../components/vision/vision.component';
import { GoalComponent } from '../../components/goal/goal.component';
import { OurBoardComponent } from '../../components/our-board/our-board.component';
import { WhereWePlayComponent } from '../../components/where-we-play/where-we-play.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports: [
    AboutUsSectionComponent,
    MissionComponent,
    VisionComponent,
    GoalComponent,
    OurBoardComponent,
    WhereWePlayComponent
  ]
})
export class AboutUsComponent {}
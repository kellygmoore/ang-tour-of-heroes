import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from  '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/swithMap';

import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-hero-detail',
	templateUrl: './hero-detail.component.html',
	ngOnInit(): void {
		
	}
})
export class HeroDetailComponent implements OnInit {
	@Input()
	hero: Hero;
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
		) {}
}

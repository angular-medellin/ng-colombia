import { TicketCheckoutService } from './shared/services/ticket-checkout.service';
import { EventScheduleService } from './event-schedule/shared/event-schedule.service';
import { EventSchedule } from './event-schedule/shared/event-schedule.model';
import { SpeakerService } from './speakers/speaker.service';
import { CountdownService } from './countdown/countdown.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { MatCheckboxModule, MatSnackBarModule, MdButtonModule, MdDialogModule, MatTabsModule, MatSidenavModule, MatCardModule, MdIconRegistry, MatIconModule, MdIconModule, NoConflictStyleCompatibilityMode,MdFormFieldModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { RecaptchaModule, RecaptchaLoaderService  } from 'ng2-recaptcha';


import { FeatureRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TimeBoxComponent } from './countdown/time-box/time-box.component';
import { SpeakerDetailComponent } from './speakers/speaker-detail/speaker-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LogoComponent } from './logo/logo.component';
import { SmoothScrollDirective } from './smooth-scroll/smooth-scroll.directive';
import { VenuInformationComponent } from './venu-information/venu-information.component';
import { LocationMapComponent } from './location-map/location-map.component';
import { PricingComponent } from './pricing/pricing.component';
import { EventScheduleComponent } from './event-schedule/event-schedule.component';
import { CommunityPartnersComponent } from './community-partners/community-partners.component';
import { PhotographerCreditLinkComponent } from './photographer-credit-link/photographer-credit-link.component';
import { EventScheduleDetailComponent } from './event-schedule/event-schedule-detail/event-schedule-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PurchaseformComponent } from './purchaseform/purchaseform.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PurchaseErrorComponent } from './purchase-error/purchase-error.component';

@NgModule({
	declarations: [
		AppComponent,
		CountdownComponent,
		AboutUsComponent,
		SpeakersComponent,
		NewsletterFormComponent,
		MainBannerComponent,
		MainPageComponent,
		TimeBoxComponent,
		SpeakerDetailComponent,
		FooterComponent,
		HeaderComponent,
		NavMenuComponent,
		LogoComponent,
		SmoothScrollDirective,
		VenuInformationComponent,
		LocationMapComponent,
		PricingComponent,
		EventScheduleComponent,
		CommunityPartnersComponent,
		EventScheduleDetailComponent,
		PhotographerCreditLinkComponent,
		PagenotfoundComponent,
		PurchaseformComponent,
		ConfirmationComponent,
		PurchaseErrorComponent
	],
	imports: [
		MdButtonModule,
		MdDialogModule,
		MatTabsModule,
		MatSidenavModule,
		MatCardModule,
		MatSnackBarModule,
		MdIconModule,
		MatCheckboxModule,
		FlexLayoutModule,
		MdFormFieldModule,
		MdInputModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		BrowserModule,
		FeatureRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		RecaptchaModule.forRoot()
	],
	entryComponents: [ SpeakerDetailComponent, EventScheduleComponent ],
	providers: [ CountdownService,
		SpeakerService,
		EventScheduleService,
		MdIconRegistry,
		TicketCheckoutService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
